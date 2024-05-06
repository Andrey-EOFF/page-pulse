import styled from "styled-components";
import { Colors } from "../../../styles/variables";
import DownloadIcon from "../../../Images/svg/icon-download.svg";

export const HeaderBtnDownload = styled.button`
  color: ${Colors.ColotBtnDownload};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.7;
  text-align: left;
  padding: 0 16px;
  background-image: url(${DownloadIcon});
  background-repeat: no-repeat;

  padding-left: 30px;
`;
