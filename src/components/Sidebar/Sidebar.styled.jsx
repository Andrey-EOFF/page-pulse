import styled from "styled-components";

import bgSidebarImg from "../../Images/img/bg-sidebar.png";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 90px;
  height: 860px;
  padding: 20px;
  background-image: url(${bgSidebarImg});
  background-size: cover;
  background-position: center;
`;
