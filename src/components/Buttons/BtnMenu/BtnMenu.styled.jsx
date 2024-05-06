import styled from "styled-components";
import { Colors } from "../../../styles/variables";
import { IoMdMenu } from "react-icons/io";

export const BtnMenuWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Colors.BgColorSecond};

`;

export const IoMdMenuIcon = styled(IoMdMenu)`
  width: 24px;
  height: 24px;
  color: ${Colors.ColorWhite};
`;
