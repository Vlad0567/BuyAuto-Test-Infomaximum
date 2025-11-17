import { FC } from "react";
import { css } from "@emotion/react";
import { COLORS } from "../styles/global.styles";
import BuyButton from "./BuyButton";
import FavoriteButton from "./FavoriteButton";

interface CarCardProps {
  id: number,
  image: string;
  name: string;
  year: number;
  color: string;
  price: string;
  availability: boolean;
}

const Card = css({
  display: "flex",
  flexWrap: "wrap",
  width: "445px",
  height: "498px",
  borderRadius: "15px",
  gap: "26px",
});

const CarImageWrapper = css({
  position: "relative",
  width: "445px",
  height: "310px",
  borderRadius: "15px 15px 0 0",
  overflow: "hidden",
  border: `1px solid ${COLORS.gray2}`,
});

const CarImage = (available: boolean) => css({
  width: "445px",
  height: "310px",
  opacity: available ? 1 : 0.3,
});

const UnavailableLabel = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "237px",
  height: "59px",
  backgroundColor: COLORS.gray4,
  color: COLORS.gray0,
  borderRadius: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",

  fontWeight: "500",
  lineHeight: "28px",
});

const Content = css({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const InfoBlock = css({
  gap: "12px",
})

const Title = css({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  margin: 0,
  width: "434px",
});

const Detail = css({
  color: COLORS.gray3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  display: "flex",
  gap: "14px",
  
});
const Info = css({
  margin: "12px 0",
});

const Price = css({
  margin: 0,
});

const Buttons = css({
  display: "flex",
  alignItems:"center",
  gap: "25px",
})

const CarCard: FC<CarCardProps> = ({ id,image, name, year, color, price,availability }) => {
  return (
    <div css={Card}>
      <div css={CarImageWrapper}>
        <img css={CarImage(availability)} src={image} alt={name} />
        {!availability && <div css={UnavailableLabel}>Нет в наличии</div>}
      </div>
      <div css={Content}>
        <div css={InfoBlock}>
          <h3 css={Title}>{name}</h3>
          <div css={Detail}>
            <p css={Info}>Год: {year}</p>
            <p css={Info}>Цвет: {color}</p>
          </div>
          <h4 css={Price}>от {price}</h4>
        </div>
        <div css={Buttons}>
          <BuyButton disabled={availability === false} />
          <FavoriteButton id={id} disabled={!availability} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
