import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import favoritesStore from "../stores/FavoritesStore";
import { css } from "@emotion/react";
import FavDefault from "../assets/icons/FavDefault.svg";
import FavHover from "../assets/icons/FavHover.svg";
import FavPressed from "../assets/icons/FavPressed.svg";
import FavDisable from "../assets/icons/FavDisable.svg";


interface Props {
  id: number;
  disabled?: boolean;
}

const buttonStyle = css({
  width: "27px",
  height: "24px",
  cursor: "pointer",
  background: "none",
  border: "none",
  padding: 0,
  outline: "none",
});

const FavoriteButton: FC<Props> = observer(({ id, disabled = false }) => {
  const [hovered, setHovered] = useState(false);
  const isFav = favoritesStore.isFavorite(id);
  
  const getIcon = () => {
    if (disabled) return FavDisable;
    if (hovered) return FavHover;
    return isFav ? FavPressed : FavDefault;
  };

  const handleClick = () => {
    if (!disabled) {
      favoritesStore.toggleFavorite(id);
    }
  };

  return (
    <button
      css={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => !disabled && setHovered(false)}
    >
      <img
        src={getIcon()}
        alt="Избранное"
        css={{ width: "100%", height: "100%" }}
      />
    </button>
  );
});

export default FavoriteButton;
