import styled from "styled-components";
import { Colors } from "../../styles/variables";

import IconRange from "../../Images/svg/icon-range.svg";

export const GrowsOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateRangeBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const DateRangeTitle = styled.h3`
  color: ${Colors.ColorGrey};

  margin-right: 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-align: center;
`;

export const Button = styled.button`
  height: 32px;
  position: relative;
  display: flex;
  padding: 12px 31px 12px 15px;
  border-radius: 20px;
  align-items: center;
  color: ${Colors.ColorWhite};
  background-color: ${Colors.BgColorSecond};

  font-size: 12px;
  font-weight: 700;
  line-height: 1.67;
  text-align: left;

  &::after {
    content: "";
    position: absolute;
    top: 56%;
    right: 12px;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-image: url(${IconRange});
    background-repeat: no-repeat;
  }
`;

export const OptionsList = styled.ul`
  display: flex;
`;

export const OptionItem = styled.li`
  height: 32px;
  position: relative;
  display: flex;
  padding: 5px 15px 5px 20px;
  border-radius: 20px;
  align-items: center;
  background-color: ${Colors.BgColorSecond};

  font-size: 12px;
  font-weight: 700;
  line-height: 1.67;
  text-align: left;

  &.growth:before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 10px;
    border-radius: 50%;

    background-color: ${Colors.BgAkcentViolet};
  }

  &.prediction:before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: ${Colors.BgAkcentYelow};
  }
`;
