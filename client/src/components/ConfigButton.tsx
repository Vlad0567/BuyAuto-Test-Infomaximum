import { FC } from "react";
import { css } from "@emotion/react";
import { COLORS } from "../styles/global.styles";

const buttonStyle = css({
  display: "flex",
  padding: "19px 34px",
  alignItems: "flex-start",
  gap: "10px",
  backgroundColor: COLORS.blue2,
  color: COLORS.gray0,
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "18px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: COLORS.blue3,
  },
  "&:active": {
    backgroundColor: COLORS.blue4,
  },
});

const ConfigButton: FC = () => {
  return <button css={buttonStyle}>Выбрать комплектацию</button>;
};

export default ConfigButton;
