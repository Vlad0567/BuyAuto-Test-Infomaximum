import { FC } from "react";
import { css } from "@emotion/react";
import SortIcon from "../assets/icons/Sort.svg";
import { observer } from "mobx-react-lite";
import { carStore, SortOption } from "../stores/CarStore";
import { COLORS } from "../styles/global.styles";

const container = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  margin: "56px 0 0 40px",
  width: "178px",
  height: "18px",
});

const iconStyle = css({
  width: "15px",
  height: "16px",
});

const selectStyle = css({
  padding: "10px",
  border: `1px solid ${COLORS.gray2}`,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: COLORS.gray0,
  fontSize: "16px",
  cursor: "pointer",
});

const SortDropdown: FC = observer(() => {
  return (
    <div css={container}>
      <img src={SortIcon} alt="Сортировка" css={iconStyle} />
      <select
        css={selectStyle}
        value={carStore.sortOption}
        onChange={(e) => carStore.setSortBy(e.target.value as SortOption)}
      >
        {Object.values(SortOption).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SortDropdown;
