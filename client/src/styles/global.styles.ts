/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*": {
    boxSizing: "border-box",
  } as const,
  "html, body, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
    fontFamily: "Inter",
  },
  "html": {
    webkitFontSmoothing: "antialiased",
    mozOsxFontSmoothing: "grayscale",
  },
  "a": {
    textDecoration: "none",
  },
  "h1": {
    fontSize: "48px",
    lineHeight: "58px",
    fontWeight: "700",
  },
  "h2": {
    fontSize: "36px",
    lineHeight: "42px",
    fontWeight: "700",
  },
  "h3": {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "500",
  },
  "h4": {
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "18px",
  },
  "p": {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "400",
    fontStyle: "normal",
  },
};

export const COLORS = {
  blue1: "#6C47FF",
  blue2: "#4F2CD9",
  blue3: "#3213AC",
  blue4: "#240C86",
  gray0: "#FFFFFF",
  gray1: "#F8F8F8",
  gray2: "#D9D9D9",
  gray3: "#595959",
  gray4: "#000000",
  red1: "#D73737",
  red2: "#B72121",
};

export const SHADOWS = {
  dropdown: "0px 10px 13px rgba(56, 46, 239, 0.29)",
};