import React from "react";
import {
  GrowAkcent,
  GrowAkcentThree,
  GrowAkcentTwo,
  GrowInfoItem,
  GrowInfoList,
  GrowInfoTitle,
  GrowInfoWrapper,
  GrowItemText,
  GrowItemTextThree,
  GrowItemTextTwo,
} from "./GrowInfo.styled";
import * as texts from "../../utils/texts";

import IconThumbs from "../../Images/svg/icon-thumbs-up.svg";
import IconStars from "../../Images/svg/icon-stars.svg";
import IconLocation from "../../Images/svg/icon-location.svg";

const GrowInfo = () => {
  const {
    GROW_TITLE_TEXT,
    HIGH_TRENDING_CHANCE_TEXT,
    SOUND_ASSESSMENT_TEXT,
    GEO_POPULARITY_TEXT,
  } = texts;

  return (
    <GrowInfoWrapper>
      <GrowInfoTitle>{GROW_TITLE_TEXT}</GrowInfoTitle>

      <GrowInfoList>
        <GrowInfoItem>
          <GrowAkcent>
            <img src={IconThumbs} alt="thumbs up icon" />
          </GrowAkcent>
          <GrowItemText>{HIGH_TRENDING_CHANCE_TEXT}</GrowItemText>
        </GrowInfoItem>

        <GrowInfoItem>
          <GrowAkcentTwo>
            <img src={IconStars} alt="thee stars icon" />
            <span>8</span>
          </GrowAkcentTwo>
          <GrowItemTextTwo>{SOUND_ASSESSMENT_TEXT}</GrowItemTextTwo>
        </GrowInfoItem>

        <GrowInfoItem>
          <GrowAkcentThree>
            <img src={IconLocation} alt="location up icon" />
            <span>
              25<span>%</span>
            </span>
          </GrowAkcentThree>
          <GrowItemTextThree>{GEO_POPULARITY_TEXT}</GrowItemTextThree>
        </GrowInfoItem>
      </GrowInfoList>
    </GrowInfoWrapper>
  );
};

export default GrowInfo;
