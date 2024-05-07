import styled from "styled-components";
import { Colors } from "../../styles/variables";

import bgChat from "../../Images/img/bg-chat.png";

export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 860px;
  float: right;
  color: ${Colors.ColorAkcentYelow};
  background-color: #77757517;

  background-image: url(${bgChat});
  background-size: cover;
  background-position: center;
`;
