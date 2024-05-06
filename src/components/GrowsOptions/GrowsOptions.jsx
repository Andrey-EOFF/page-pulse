import React from "react";
import {
  Button,
  DateRangeBlock,
  DateRangeTitle,
  GrowsOptionsWrapper,
  OptionItem,
  OptionsList,
} from "./GrowsOptions.styled";
import * as texts from "../../utils/texts";

const { DATE_RANGE_TITLE, GROWTH_OPTION, AI_PREDICTION_OPTION } = texts;

const GrowsOptions = () => {
  return (
    <GrowsOptionsWrapper>
      <DateRangeBlock>
        <DateRangeTitle>{DATE_RANGE_TITLE}</DateRangeTitle>
        <Button type="button">Last Month</Button>
      </DateRangeBlock>

      <OptionsList>
        <OptionItem>{GROWTH_OPTION}</OptionItem>
        <OptionItem>{AI_PREDICTION_OPTION}</OptionItem>
      </OptionsList>
    </GrowsOptionsWrapper>
  );
};

export default GrowsOptions;
