import styled from "styled-components";
import { Colors } from "../../styles/variables";

import bgRecomd from "../../Images/img/bg-recomBaner.png";

export const CheckBoxNav = styled.ul`
  display: flex;
  height: 31px;
  width: 100%;
  border-bottom: 1px solid #ffffff0d;
  color: ${Colors.ColorGrey};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  text-align: left;

  margin-bottom: 20px;
`;

export const NavItem = styled.li`
  margin-right: 30px;
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: flex-start;

  &.active {
    color: #d1fd0a;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid #d1fd0a;
  }

  img {
    margin-left: 6px;
  }
`;

export const InfoCheckBaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  height: 40px;

  background-image: url(${bgRecomd});
  background-size: cover;
  background-position: center;

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const TextBanerMain = styled.div`
  color: ${Colors.ColorWhite};

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  text-align: center;

  span {
    color: ${Colors.ColorAkcentYelow};

    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
  }
`;

export const TextBaner = styled.div`
  color: ${Colors.ColorWhite};
  min-height: 230px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.42;
  text-align: center;
`;
