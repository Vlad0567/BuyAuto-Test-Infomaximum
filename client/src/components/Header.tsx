import { css } from "@emotion/react";
import { COLORS } from "../styles/global.styles";
import { Link } from "react-router-dom";
import FavIcon from "../assets/icons/FavHover.svg";
import KupiAvto from "../assets/icons/KupiAvto.svg"
import CatalogButton from "./CatalogButton";

const headerStyle = css({
  position: "fixed",
  top: 0,
  zIndex: 1000,
  margin: "0 auto 0 auto",
  height: "70px",
  width: "1920px",
  backgroundColor: COLORS.gray0,
  borderBottom: `1px solid ${COLORS.gray2}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
});

const leftBlock = css({
  display: "flex",
  alignItems: "center",
  gap: "21px",
});

const logoStyle = css({
  width: "134px",
  height: "18.49px",
});

const centerBlock = css({
  display: "flex",
  gap: "31px",
  marginLeft: "806px",
});

const addressStyle = css({ width: "313px" });
const phoneStyle = css({ width: "138px" });

const rightBlock = css({
  display: "flex",
  gap: "12px",
  cursor: "pointer",
  alignItems: "center",
  "& a": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",},
});

const FavIconStyle = css({ width:"27px", height:"24px" });

const favoriteTextStyle = css({
  color: COLORS.gray4,
  width: "87px",
});

const Header = () => {
  return (
    <header css={headerStyle}>
      <div css={leftBlock}>
        <div css={logoStyle}>
          <img src={KupiAvto} alt="КупиАвто" />
        </div>
          <CatalogButton />
      </div>

      <div css={centerBlock}>
        <h4 css={addressStyle}>Москва, Волгоградский пр-кт, 43, стр 1</h4>
        <h4 css={phoneStyle}>+7 800 555 35 35</h4>
      </div>

      <div css={rightBlock}>
        <Link to="/Favorites">
          <img src={FavIcon} css={FavIconStyle} alt="Избранное" />
          <h4 css={favoriteTextStyle}>Избранное</h4>
        </Link>
      </div>
    </header>
  );
};

export default Header;
