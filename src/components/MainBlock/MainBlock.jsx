import React from "react";
import { MainBlockWrapper } from "./MainBlock.styled";
import Header from "../Header/Header";
import InfoMusic from "../InfoMusic/InfoMusic";

const MainBlock = () => {
  return (
    <div>
      <MainBlockWrapper>
        <Header />
        <InfoMusic />
      </MainBlockWrapper>
    </div>
  );
};

export default MainBlock;
