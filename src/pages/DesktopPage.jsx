import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MainBlock from "../components/MainBlock/MainBlock";
import ChatBlock from "../components/ChatBlock/ChatBlock";
import { DesktopPageWrapper } from "./DesktopPage.styled";

const DesktopPage = () => {
  return (
    <DesktopPageWrapper>
      <Sidebar />
      <MainBlock />
      <ChatBlock />
    </DesktopPageWrapper>
  );
};

export default DesktopPage;
