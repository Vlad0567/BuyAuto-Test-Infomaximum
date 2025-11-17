import { makeAutoObservable, runInAction } from "mobx";
import { graphqlClient } from "../graphql/client";
import { gql } from "graphql-request";
import { Query } from "../graphql/generated";

const CARS_QUERY = gql`
  query {
    cars {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`;

export enum SortOption {
  AvailableFirst = "Сначала в наличии",
  NameAsc = "По имени (A-Z)",
  NameDesc = "По имени (Z-A)",
  YearDesc = "Сначала новее",
  YearAsc = "Сначала старше",
  PriceAsc = "Сначала дешевле",
  PriceDesc = "Сначала дороже",
}

class CarStore {
  cars: Query["cars"] = [];
  loading = false;
  error: string | null = null;
  sortOption: SortOption = SortOption.AvailableFirst;
  searchQuery: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchCars = async () => {
    this.loading = true;
    this.error = null;

    try {
      const data = await graphqlClient.request<{ cars: Query["cars"] }>(CARS_QUERY);
      runInAction(() => {
        this.cars = data.cars;
        this.error = null;
      });
    } catch (err: any) {
      runInAction(() => {
        this.error = err.message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  setSortBy(option: SortOption) {
    this.sortOption = option;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query.toLowerCase();
  }

  get filteredCars() {
    const query = this.searchQuery.trim();
    let result = this.cars;

    if (query) {
      result = result.filter((car) =>
        [car.brand, car.model, car.color, String(car.model_year)]
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
    }

    switch (this.sortOption) {
      case SortOption.AvailableFirst:
        result = result.slice();
        result.sort((a, b) => Number(b.availability) - Number(a.availability));
        break;
      case SortOption.NameAsc:
        result = result.slice();
        result.sort((a, b) => (a.brand + a.model).localeCompare(b.brand + b.model));
        break;
      case SortOption.NameDesc:
        result = result.slice();
        result.sort((a, b) => (b.brand + b.model).localeCompare(a.brand + a.model));
        break;
      case SortOption.YearDesc:
        result = result.slice();
        result.sort((a, b) => b.model_year - a.model_year);
        break;
      case SortOption.YearAsc:
        result = result.slice();
        result.sort((a, b) => a.model_year - b.model_year);
        break;
      case SortOption.PriceAsc:
        result = result.slice();
        result.sort((a, b) => Number(a.price.replace('$', '')) - Number(b.price.replace('$', '')));
        break;
      case SortOption.PriceDesc:
        result = result.slice();
        result.sort((a, b) => Number(b.price.replace('$', '')) - Number(a.price.replace('$', '')));
        break;
    }

    return result;
  }
}

export const carStore = new CarStore();
