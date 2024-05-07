import React from "react";
import {
  AudienceWrapper,
  List,
  ListItem,
  ItemInfo,

  Icon,
  Name,
  Percentage,
  BarWrapper,
  Bar,
  LitsNameWrapper,
} from "./Audience.styled";
import { Container } from "../../styles/GlobalStyles";
import { Colors } from "../../styles/variables";
import Title from "../Title/Title";
import { AUDIENCE_TITLE_TEXT } from "../../utils/texts";
import IconAudience from "../../Images/svg/icon-audience.svg";

import IconBeauty from "../../Images/svg/icon-chair.svg";
import IconMusic from "../../Images/svg/icon-boombox.svg";
import IconTravel from "../../Images/svg/icon-beach.svg";
import IconShow from "../../Images/svg/icon-watch.svg";
import IconSport from "../../Images/svg/icon-soccer.svg";
import IconHeath from "../../Images/svg/icon-health.svg";
import IconOther from "../../Images/svg/icon-other.svg";

const Audience = () => {
  const audienceData = [
    {
      iconSrc: IconBeauty,
      name: "Beauty",
      percentage: 40,
    },
    {
      iconSrc: IconMusic,
      name: "Music",
      percentage: 31,
    },
    {
      iconSrc: IconTravel,
      name: "Travel",
      percentage: 22,
    },
    {
      iconSrc: IconShow,
      name: "Show",
      percentage: 14,
    },
    {
      iconSrc: IconSport,
      name: "Sport",
      percentage: 12,
    },
    {
      iconSrc: IconHeath,
      name: "Heath",
      percentage: 9,
    },
    {
      iconSrc: IconOther,
      name: "Other",
      percentage: 6,
    },
  ];

  return (
    <AudienceWrapper>
      <Container>
        <Title color={Colors.ColorWhite} icon={IconAudience}>
          {AUDIENCE_TITLE_TEXT}
        </Title>
        <List>
          {audienceData.map((item, index) => (
            <ListItem key={index}>
              <ItemInfo>
                <LitsNameWrapper>
                  <Icon src={item.iconSrc} alt={item.name} />
                  <Name>{item.name}</Name>
                </LitsNameWrapper>

                <Percentage>{item.percentage}%</Percentage>
              </ItemInfo>
              <BarWrapper>
                <Bar percentage={item.percentage} />
              </BarWrapper>
            </ListItem>
          ))}
        </List>
      </Container>
    </AudienceWrapper>
  );
};

export default Audience;
