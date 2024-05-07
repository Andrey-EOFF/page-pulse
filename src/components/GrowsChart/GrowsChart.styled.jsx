import styled from "styled-components";
import { Colors } from "../../styles/variables";
const barWidth = 69;
const barHeight = 40;
const xGap = 59;

export const GrowsChartWrapper = styled.section`
  width: 100%;
  color: ${Colors.ColorWhite};
  padding-bottom: 53px;
`;

export const ChartTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);

  color: ${Colors.ColorGrey};
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;

  margin-right: 4px;
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 25px;
`;

export const XAxis = styled.div`
  display: flex;
`;

export const XValue = styled.div`
  width: ${xGap}px;
  color: ${Colors.ColorGrey};
  font-size: 10px;
  font-weight: 700;
  line-height: 2;
  text-align: center;
`;

export const YAxis = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-right: 10px;
  position: relative;
  gap: 20px;
  margin-bottom: 10px;
`;

export const YValue = styled.div`
  height: 20px;
  color: ${Colors.ColorWhite};
  font-size: 10px;
  font-weight: 700;
  line-height: 2;
  text-align: right;
`;

export const Bars = styled.div`
  display: flex;
  margin-left: ${xGap}px;
`;

export const Bar = styled.div`
  width: ${barWidth}px;
  height: ${({ value }) => ((value - 50_000) / 50_000) * barHeight}px;
  background-color: blue;
  margin-right: ${xGap - barWidth}px;
`;
