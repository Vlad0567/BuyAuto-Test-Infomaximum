import { FC } from "react";
import { css } from "@emotion/react";
import { COLORS } from "../styles/global.styles";
import ConfigButton from "./ConfigButton";
import RemoveFavoriteButton from "./RemoveFavoriteButton";

interface FavoriteCarCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  year: number;
  color: string;
  price: string;
}

const wrapper = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  width: "1838.5px",
  height: "333px",
  marginBottom: "36.39px",
});

const inner = css({
  display: "flex",
  width: "1838px",
  alignItems: "center",
  gap: "20px",
});

const imageStyle = css({
  borderRadius: "11.573px 11.573px 0px 0px",
  border: `1px solid ${COLORS.gray2}`,
  width: "443px",
  height: "309px",
});

const content = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
  height: "309px",
  alignSelf: "stretch",
});

const infoBlock = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: "1 0 0",
});

const descBlock = css({
  display: "flex",
  height: "184px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
});

const title = css({
  color: COLORS.gray4,
  width: "834px",
  height: "42px",
  margin: "0",
});

const descriptionInfo = css({
  color: COLORS.gray3,
  width: "810px",
  margin: 0,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});


const yearColor = css({
  color: COLORS.gray3,
  width: "353px",
  height: "16px",
  margin: "0",
});

const priceActions = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  height: "105px",
  gap: "20px",
});

const priceInfo = css({
  width: "434px",
  color: COLORS.gray4,
  margin: 0,
});

const buttons = css({
  display: "flex",
  alignItems: "flex-end",
  gap: "20px",
});

const divider = css({
  width: "1838.5px",
  height: "0px",
  borderTop: `1px solid ${COLORS.gray2}`,
});

const FavoriteCarCard: FC<FavoriteCarCardProps> = ({
  id,
  image,
  name,
  description,
  year,
  color,
  price,
}) => {
  return (
    <div css={wrapper}>
      <div css={inner}>
        <img css={imageStyle} src={image} alt={name} />
        
        <div css={content}>
          <div css={infoBlock}>
            <div css={descBlock}>
              <h2 css={title}>{name}</h2>
              <p css={descriptionInfo}>{description}</p>
              <p css={yearColor}>Год: {year}</p>
              <p css={yearColor}>Цвет: {color}</p>
            </div>
          </div>

          <div css={priceActions}>
            <h3 css={priceInfo}>от {price}</h3>
            <div css={buttons}>
              <ConfigButton />
              <RemoveFavoriteButton id={id} />
            </div>
          </div>
        </div>
      </div>
      <div css={divider}></div>
    </div>
  );
};

export default FavoriteCarCard;
