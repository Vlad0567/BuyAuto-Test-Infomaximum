import { FC, useState } from "react";
import { css } from "@emotion/react";
import favoritesStore from "../stores/FavoritesStore";
import DeleteDefault from "../assets/icons/DeleteDefault.svg";
import DeleteHover from "../assets/icons/DeleteHover.svg";
import DeletePressed from "../assets/icons/DeletePressed.svg";

interface Props {
  id: number;
}

const buttonStyle = css({
  display: "flex",
  width: "56px",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  background: "none",
  cursor: "pointer",
  padding: 0,
});

const RemoveFavoriteButton: FC<Props> = ({ id }) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const getIcon = () => {
    if (pressed) return DeletePressed;
    if (hovered) return DeleteHover;
    return DeleteDefault;
  };

  return (
    <button
      css={buttonStyle}
      onClick={() => favoritesStore.toggleFavorite(id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <img src={getIcon()} alt="Удалить" />
    </button>
  );
};

export default RemoveFavoriteButton;
