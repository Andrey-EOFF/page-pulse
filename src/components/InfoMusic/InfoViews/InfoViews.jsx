import React from "react";
import {
  InfoBlockSub,
  InfoBlockView,
  InfoItemWatch,
  InfoSubNum,
  InfoSubTitle,
  InfoViewNum,
  InfoViewTitle,
  InfoViewsWrapper,
} from "./InfoViews.styled";

const InfoViews = ({ music }) => {
  return (
    <InfoViewsWrapper>
      <InfoBlockView>
        <InfoViewTitle>{music.title}</InfoViewTitle>
        <InfoViewNum>{music.count}</InfoViewNum>
        <InfoItemWatch type="button">{music.watch}</InfoItemWatch>
      </InfoBlockView>

      <InfoBlockSub>
        <InfoSubTitle> Daily Growth</InfoSubTitle>
        <InfoSubNum>{music.daily_growth}</InfoSubNum>
      </InfoBlockSub>
    </InfoViewsWrapper>
  );
};

export default InfoViews;
