import { makeAutoObservable } from "mobx";

class FavoritesStore {
  favoriteIds: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  toggleFavorite(id: number) {
    if (this.favoriteIds.includes(id)) {
      this.favoriteIds = this.favoriteIds.filter((favId) => favId !== id);
    } else {
      this.favoriteIds.push(id);
    }
  }

  isFavorite(id: number): boolean {
    return this.favoriteIds.includes(id);
  }

  clearFavorites() {
    this.favoriteIds = [];
  }

  get allFavorites() {
    return this.favoriteIds;
  }
}

const favoritesStore = new FavoritesStore();
export default favoritesStore;
