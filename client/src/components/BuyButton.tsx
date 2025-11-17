import { FC, useState } from "react";
import { css } from "@emotion/react";
import { COLORS } from "../styles/global.styles";

interface BuyButtonProps {
  disabled?: boolean;
}

const buttonBaseStyle = css({
  width: "254px",
  padding: "19px 99px",
  borderRadius: "5px",
  border: "none",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "18px",
  transition: "background-color 0.3s ease",
  cursor: "pointer",
});

const defaultStyle = css({
  backgroundColor: COLORS.blue2,
  color: COLORS.gray0,
  "&:hover": {
    backgroundColor: COLORS.blue3,
  },
});

const pressedStyle = css({
  backgroundColor: COLORS.blue4,
  color: COLORS.gray0,
});

const disabledStyle = css({
  backgroundColor: COLORS.gray2,
  color: COLORS.gray4,
  cursor: "not-allowed",
});

const BuyButton: FC<BuyButtonProps> = ({ disabled = false }) => {
  const [isPressed, setPressed] = useState(false);

  return (
    <button
      css={[
        buttonBaseStyle,
        disabled ? disabledStyle : isPressed ? pressedStyle : defaultStyle,
      ]}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => !disabled && setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      disabled={disabled}
    >
      Купить
    </button>
  );
};

export default BuyButton;
