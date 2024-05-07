import React from "react";
import { TitleStyle } from "./Title.styled";

const Title = ({ color, icon, children }) => {
  return (
    <div>
      <TitleStyle color={color} icon={icon}>{children}</TitleStyle>
    </div>
  );
};

export default Title;
