import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const AudienceWrapper = styled.section`
  width: 100%;
  padding-bottom: 48px;
`;

export const List = styled.ul`
display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  gap: 20px; 
  color: white;
  list-style-type: none;
  width: 100%; 
`;

export const ListItem = styled.li`
 display: flex;
  align-items: center;
  width: calc(50% - 10px); 
  flex-direction: column;
`;

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 6px;
`;

export const LitsNameWrapper = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const Name = styled.p`
  color: ${Colors.ColorWhite};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  text-align: left;
`;

export const Percentage = styled.p`
  color: ${Colors.ColorWhite};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  text-align: left;
`;

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 425px;
  height: 8px;
  background-color: ${Colors.BgColorSecond};
`;

export const Bar = styled.div`
  width: ${({ percentage }) => percentage}%;
  height: 4px;
  background-color: ${Colors.ColorAkcentYelow};
  position: relative;
  box-shadow: 0px 0px 1px ${Colors.ColorAkcentYelow};
  &::before,
  &::after {
    content: "";
    position: absolute;
    right: -2px;
    border-right: 2px solid;
    height: 7px;
  }

  &::after {
    bottom: 0px;
  }
`;
