import styled from "styled-components";
import { Colors } from "../../../styles/variables";
import UpdateIcon from "../../../Images/svg/icon-update.svg";

export const HeaderBtnUpdate = styled.button`

margin-right: 30px;
  color: ${Colors.ColorBtnUpdate};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.7;
  text-align: left;
  padding: 0 16px;
  background-image: url(${UpdateIcon});
  background-repeat: no-repeat;

  padding-left: 30px; 
`;
