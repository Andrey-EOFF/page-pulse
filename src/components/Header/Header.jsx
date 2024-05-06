import React from "react";
import {
  HeaderDateTime,
  HeaderLustDateUpdate,
  HeaderTimeUpdate,
  HeaderTitle,
  HeaderUse,
  HeaderWrapper,
} from "./Header.styled";
import BtnUpdate from "../Buttons/BtnUpdate/BtnUpdate";
import BtnDownload from "../Buttons/BtnDownload/BtnDownload";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>AI Prediction</HeaderTitle>
      <HeaderUse>
        <HeaderTimeUpdate>
          <HeaderLustDateUpdate>
            Last update:
            <HeaderDateTime> 13.03.2024</HeaderDateTime>
          </HeaderLustDateUpdate>
          <HeaderLustDateUpdate>
            Date added to the platform:
            <HeaderDateTime> 17.12.2023</HeaderDateTime>
          </HeaderLustDateUpdate>
        </HeaderTimeUpdate>
        <BtnUpdate />
        <BtnDownload />
      </HeaderUse>
    </HeaderWrapper>
  );
};

export default Header;
