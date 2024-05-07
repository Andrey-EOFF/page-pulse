import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const RelatedWrapper = styled.section`
  width: 100%;
  padding-bottom: 53px;
`;

export const RelatedBlock = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.BgColorSecond};

  img {
    width: 70px;
    height: 70px;
  }
`;

export const RelatedText = styled.section`
  color: ${Colors.ColorWhite};

  margin-right: 20px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  text-align: left;
`;

export const Button = styled.button`
  height: 25px;
  display: flex;
  padding: 5px 20px 5px 20px;
  border-radius: 20px;
  align-items: center;
  color: ${Colors.ColorBlack};
  background-color: ${Colors.BgAkcentYelow};

  font-size: 12px;
  font-weight: 700;
  line-height: 1.67;
  text-align: left;
`;
