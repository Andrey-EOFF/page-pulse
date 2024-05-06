import React from "react";
import { SidebarWrapper } from "./Sidebar.styled";
import BtnMenu from "../Buttons/BtnMenu/BtnMenu";
import UserMenu from "../UserMenu/UserMenu";

function Sidebar() {
  return (
    <>
      <SidebarWrapper>
        <BtnMenu />
        <UserMenu />
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
