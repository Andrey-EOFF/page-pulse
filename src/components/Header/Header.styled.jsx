import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 13px 40px;
`;

export const HeaderTitle = styled.h1`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  text-align: left;
  color: ${Colors.ColorTitelHeader};
`;

export const HeaderUse = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeaderTimeUpdate = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

export const HeaderLustDateUpdate = styled.li`
  display: flex;
  font-size: 10px;
  font-weight: 600;
  line-height: 2;
  text-align: right;
  color: ${Colors.ColorUpdateTime};
`;

export const HeaderDateTime = styled.span`
  font-size: 10px;
  font-weight: 700;
  line-height: 2;
  text-align: right;

  color: ${Colors.ColorUpdateTime};
`;
