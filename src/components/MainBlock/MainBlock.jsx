import React from "react";
import { MainBlockWrapper } from "./MainBlock.styled";
import Header from "../Header/Header";
import InfoMusic from "../InfoMusic/InfoMusic";

import GrowsChart from "../GrowsChart/GrowsChart";

import { MusicData } from "../../data/artist";
import Audience from "../Audience/Audience";

const MainBlock = () => {
  return (
    <div>
      <MainBlockWrapper>
        <Header />
        <InfoMusic MusicData={MusicData} />
        <GrowsChart />
        <Audience />
      </MainBlockWrapper>
    </div>
  );
};

export default MainBlock;
