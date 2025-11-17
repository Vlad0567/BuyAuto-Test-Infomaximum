import { FC } from "react";
import { css } from "@emotion/react";
import { COLORS } from "../styles/global.styles";
import { Link } from "react-router-dom";
import BurgerIcon from "../assets/icons/Burger.svg";

const buttonStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "7px",
  backgroundColor: COLORS.blue2,
  color: COLORS.gray0,
  border: "none",
  borderRadius: "5px",
  width: "135px",
  height: "36px",
  padding: "9px 26px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: COLORS.blue3,
  },
  "&:active": {
    backgroundColor: COLORS.blue4,
  },
});

const textStyle = css({ width: "64px" });

const CatalogButton: FC = () => {
  return (
    <Link to="/" css={buttonStyle}>
      <img src={BurgerIcon} alt="Каталог" />
      <h4 css={textStyle}>Каталог</h4>
    </Link>
  );
};

export default CatalogButton;
