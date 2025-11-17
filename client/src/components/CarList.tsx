import { FC } from "react";
import CarCard from "./CarCard";
import { css } from "@emotion/react";
import SortDropdown from "./SortDropdown";
import { SearchInput } from "./SearchInput";
import {carStore} from "../stores/CarStore";
import { observer } from "mobx-react-lite";

const containerStyle = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "73px 20px",
  margin: "42px 40px 40px 40px",
  paddingBottom: "100px",
});

const topControls = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

});

const CarList: FC = observer(() => {
  const cars = carStore.filteredCars;
  
  return (
    <>
      <div css={topControls}>
        <SortDropdown />
        <SearchInput />
      </div>
      <div css={containerStyle}>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            image={`http://localhost:4000${car.img_src}`}
            name={car.brand + " " +car.model}
            year={car.model_year}
            color={car.color}
            price={car.price}
            availability={car.availability}
          />
        ))}
      </div>
    </>
  );
});

export default CarList;
