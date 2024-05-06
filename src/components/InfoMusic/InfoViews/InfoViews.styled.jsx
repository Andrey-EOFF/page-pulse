import styled from "styled-components";
import { Colors } from "../../../styles/variables";
import PlayIcon from "../../../Images/svg/icon-play.svg";

export const InfoViewsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
`;

export const InfoBlockView = styled.div`
  display: flex;
  height: 140px;
  background-color: ${Colors.BgColorSecond};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoViewTitle = styled.h2`
  color: ${Colors.ColorGreyTitle};

  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;

  margin-bottom: 12px;
`;

export const InfoViewNum = styled.p`
  color: ${Colors.ColorWhite};

  font-size: 40px;
  font-weight: 700;
  line-height: 1.21;
  text-align: center;

  margin-bottom: 18px;
`;

export const InfoItemWatch = styled.button`
  color: ${Colors.ColorAkcentYelow};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.21;
  text-align: center;

  background-image: url(${PlayIcon});
  background-repeat: no-repeat;

  padding-left: 20px;
`;

export const InfoBlockSub = styled.div`
  display: flex;
  height: 100px;
  align-items: center;

  flex-direction: column;
  justify-content: center;
  background-color: ${Colors.BgColorAkcentGreen};
`;

export const InfoSubTitle = styled.h2`
  color: #aaffdb;

  margin-bottom: 12px;

  font-size: 13px;
  font-weight: 600;
  line-height: 1.53;
  text-align: center;
`;

export const InfoSubNum = styled.p`
  color: ${Colors.ColorWhite};

  font-size: 32px;
  font-weight: 700;
  line-height: 1.21;
  text-align: center;
`;
