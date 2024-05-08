import styled from "styled-components";
import { Colors } from "../../styles/variables";
const barWidth = 69;
const barHeight = 40;
const xGap = 58;

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
  position: relative;
`;

export const XAxis = styled.div`
  display: flex;
`;

// export const XValue = styled.div`
//   width: ${xGap}px;
//   color: ${Colors.ColorGrey};
//   font-size: 10px;
//   font-weight: 700;
//   line-height: 2;
//   text-align: center;
// `;

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
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 16px;
    height: 16px;
    border-bottom: 1px solid #ffffff0d;
    width: 810px;
  }
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

export const List = styled.ul`
  position: absolute;
  display: flex;
  width: 800px;
  height: 182px;
  align-items: flex-end;
  gap: 4px;
  bottom: -19px;
  left: 190px;
`;

export const Item = styled.li`
position: relative;
  width: 69px;
  height: 40px;

  background-color: ${Colors.BgAkcentViolet};

  &:after {
    content: " ${(props) => props.before}";
    position: absolute;
    position: absolute;
    bottom: -20px;
    left: -10px;

    color: ${Colors.ColorGrey};

font-size: 10px;
font-weight: 700;
line-height: 2;
text-align: center;

  }
`;

export const ItemAkc = styled.li`
  width: 69px;
  height: 180px;
  background: linear-gradient(
    180deg,
    rgba(209, 253, 10, 0) 0%,
    rgba(209, 253, 10, 0.5) 100%
  );

  background: linear-gradient(
    180deg,
    rgba(209, 253, 10, 0) 0%,
    rgba(209, 253, 10, 0.5) 100%
  );
`;
