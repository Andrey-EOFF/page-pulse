import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85px;
  margin-bottom: 15px;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  color: ${Colors.ColorIconMenu};
`;

export const AvatarUser = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
`;
