import { FC } from "react";
import { observer } from "mobx-react-lite";
import favoritesStore from "../stores/FavoritesStore";
import { carStore } from "../stores/CarStore";
import FavoriteCarCard from "../components/FavoriteCarCard";
import { css } from "@emotion/react";
import { COLORS } from "../styles/global.styles";

const pageWrapper = css({
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

});

const titleStyle = css({
  margin: "6px 0 26px 0"
});

const divider = css({
  width: "1838.5px",
  height: "0px",
  borderTop: `1px solid ${COLORS.gray2}`,
  marginBottom: "64px",
});

const cardWrapper = css({
  marginBottom: "36.39px",
})

const Favorites: FC = observer(() => {
  const favoriteIds = Array.from(favoritesStore.favoriteIds);
  const favoriteCars = carStore.cars.filter((car) => favoriteIds.includes(car.id));

  function getPositionWord(count: number): string {
    const mod10 = count % 10;
    const mod100 = count % 100;

    if (mod10 === 1 && mod100 !== 11) return "позиция";
    if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return "позиции";
    return "позиций";
  }


  return (
    <main css={pageWrapper}>
      <h1 css={titleStyle}>
        Избранные товары — {favoriteCars.length} {getPositionWord(favoriteCars.length)}
      </h1>
      <div css={divider}></div>
      
      <div css={cardWrapper}>
        {favoriteCars.map((car) => (
          <FavoriteCarCard
            key={car.id}
            id={car.id}
            image={`http://localhost:4000${car.img_src}`}
            name={`${car.brand} ${car.model}`}
            description={car.description}
            year={car.model_year}
            color={car.color}
            price={car.price}
          />
        ))}
      </div>
    </main>
  );
});

export default Favorites;
