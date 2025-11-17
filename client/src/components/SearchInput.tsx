import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { css } from "@emotion/react";
import { carStore } from "../stores/CarStore";
import SearchIcon from "../assets/icons/Search.svg";

const inputWrapper = css({
  display: "flex",
  alignItems: "center",
  border: "1px solid #D9D9D9",
  borderRadius: "5px",
  padding: "8px 12px",
  width: "445px",
  height: "36px",
  margin: "40px 44px 0 0",
  gap: "4px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const wrapperStyle = css({
  display: "flex",
  alignItems: "center",
  width: "431px",
  height: "24px",
  margin: "4px 4px 4px 10px",
})

const inputStyle = css({
  border: "none",
  outline: "none",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  width: "392px",
  flex: "1 0 0",
});

const iconStyle = css({
  display: "flex",
  alignItems: "center",
  width: "24px",
  height: "24px",
  marginRight:"0 4px 0 0",
});

export const SearchInput: FC = observer(() => {
  const [search, setSearch] = useState("");
  let timeout: ReturnType<typeof setTimeout>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      carStore.setSearchQuery(value);
    }, 500);
  };

  return (
    <div css={inputWrapper}>
      <div css ={wrapperStyle}>
        <input
          css={inputStyle}
          type="text"
          placeholder="Найти авто"
          value={search}
          onChange={handleChange}
        />
        <img src={SearchIcon} alt="search" css={iconStyle} />
      </div>
    </div>
  );
});
