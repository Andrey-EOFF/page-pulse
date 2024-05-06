import React from "react";
import {
  GrowsChartContainer,
  ChartTitle,
  ChartContainer,
  XAxis,
  XValue,
  YAxis,
  YValue,
  Bars,
  Bar,
} from "./GrowsChart.styled";
import GrowsOptions from "../GrowsOptions/GrowsOptions";
import * as texts from "../../utils/texts";

const GrowsChart = () => {
  const { CHART_TITLE_TEXT } = texts;
  const xValues = [
    "MO",
    "TU",
    "WE",
    "TH",
    "FR",
    "SA",
    "SU",
    "MO",
    "TU",
    "WE",
    "TH",
    "FR",
  ];
  const yValues = ["0", "100k", "200k", "300k", "400k", "500k"];
  const barData = [50000];

  return (
    <GrowsChartContainer>
      <ChartContainer>
        <ChartTitle>{CHART_TITLE_TEXT}</ChartTitle>
        <YAxis>
          {yValues.map((value, index) => (
            <YValue key={index}>{value}</YValue>
          ))}
        </YAxis>
        <XAxis>
          {xValues.map((value, index) => (
            <XValue key={index}>{value}</XValue>
          ))}
        </XAxis>

        <Bars>
          {barData.map((value, index) => (
            <Bar key={index} value={value} />
          ))}
        </Bars>
      </ChartContainer>

      <GrowsOptions />
    </GrowsChartContainer>
  );
};

export default GrowsChart;
