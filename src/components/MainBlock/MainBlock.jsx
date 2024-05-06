import React from "react";
import { MainBlockWrapper } from "./MainBlock.styled";
import Header from "../Header/Header";
import InfoMusic from "../InfoMusic/InfoMusic";

import GrowInfo from "../GrowsInfo/GrowInfo";
import GrowsChart from "../GrowsChart/GrowsChart";

import { MusicData } from "../../data/artist";

const MainBlock = () => {
  return (
    <div>
      <MainBlockWrapper>
        <Header />
        <InfoMusic MusicData={MusicData} />
        <GrowInfo />
        <GrowsChart />
      </MainBlockWrapper>
    </div>
  );
};

export default MainBlock;
