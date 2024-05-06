import React from "react";
import {
  UserMenuWrapper,
  MenuList,
  MenuItem,
  AvatarUser,
  AvatarImg,
} from "./UserMenu.styled";

import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa6";

import Avatar from "../../Images/img/avatar.png";

const UserMenu = () => {
  return (
    <UserMenuWrapper>
      <MenuList>
        <MenuItem>
          <IoMdSettings width={24} height={24} />
        </MenuItem>
        <MenuItem>
          <FaBell width={24} height={24} />
        </MenuItem>
      </MenuList>

      <AvatarUser>
        <AvatarImg src={Avatar} alt="Avatar" />
      </AvatarUser>
    </UserMenuWrapper>
  );
};

export default UserMenu;
