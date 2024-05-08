import React from "react";
import { Colors } from "../../styles/variables";
import { Container } from "../../styles/GlobalStyles";
import useStore from "../../store/recomdStore";

import IconRecomd from "../../Images/svg/icon-recommendation.svg";
import SadSmile from "../../Images/img/sad-smile.png";
import IconLock from "../../Images/svg/icon-lock.svg";

import {
  RECOMMENDATION_TITLE_FIRST,
  RECOMMENDATION_TITLE_NEXT,
} from "../../utils/texts";
import Title from "../Title/Title";
import CheckBox from "../CheckBox/CheckBox";
import {
  CheckBoxNav,
  NavItem,
  InfoCheckBaner,
  TextBaner,
  TextBanerMain,
} from "./Recomd.styled";

const Recomd = () => {
  const { activeNavItem, setActiveNavItem } = useStore((state) => ({
    activeNavItem: state.activeNavItem,
    setActiveNavItem: state.setActiveNavItem,
  }));

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <section>
      <Container>
        <Title color={Colors.ColorWhite} icon={IconRecomd}>
          <span>{RECOMMENDATION_TITLE_FIRST}</span> {RECOMMENDATION_TITLE_NEXT}
        </Title>

        <CheckBoxNav>
          <NavItem
            onClick={() => handleNavItemClick("Base")}
            className={activeNavItem === "Base" ? "active" : ""}
          >
            Base
          </NavItem>
          <NavItem
            onClick={() => handleNavItemClick("Advanced")}
            className={activeNavItem === "Advanced" ? "active" : ""}
          >
            Advanced
            <img src={IconLock} alt="icon yelow lock" />
          </NavItem>
        </CheckBoxNav>

        <InfoCheckBaner>
          <img src={SadSmile} alt="sad smile" />
          <TextBanerMain>
            You have only <span>2/10</span> subscriptions
          </TextBanerMain>
        </InfoCheckBaner>
        <div>
          {activeNavItem === "Base" ? (
            <CheckBox />
          ) : (
            <TextBaner>You don't have subscriptions</TextBaner>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Recomd;
