import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const GrowInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const GrowInfoList = styled.ul`
  display: flex;
  justify-content: center;
  color: ${Colors.ColorWhite};

  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
`;

export const GrowInfoItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 34px;
  margin-right: 20px;
`;

export const GrowAkcent = styled.div`
  height: 34px;
  padding: 7px 12px;
  border-radius: 20px;
  background: linear-gradient(180deg, #ff98fb 0%, #ffe769 100%);

  position: absolute;
  left: -15px;
`;

export const GrowItemText = styled.div`
  padding: 8px 20px 8px 40px;
  border: 1px solid;

  border-image-source: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    radial-gradient(
      57.38% 354.41% at 0% 50%,
      rgba(255, 152, 251, 0.25) 0%,
      rgba(255, 231, 105, 0) 100%
    );
  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${Colors.ColorWhite};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  text-align: left;
`;

export const GrowAkcentTwo = styled.div`
  display: flex;
  height: 34px;
  padding: 8px 12px;
  border-radius: 20px;
  background: #00ff94;
  position: absolute;
  left: -15px;

  span {
    color: ${Colors.ColorBlack};

    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    text-align: left;
  }
`;

export const GrowItemTextTwo = styled.div`
  color: ${Colors.ColorWhite};
  padding: 8px 20px 8px 50px;

  border: 1px solid;

  border-image-source: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    radial-gradient(
      48.02% 392.65% at 0% 50%,
      rgba(0, 255, 148, 0) 100%,
      rgba(0, 255, 148, 0.25) 0%
    );

  border-left: none;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  text-align: left;
`;

export const GrowAkcentThree = styled.div`
  display: flex;
  height: 34px;
  padding: 7px 12px;
  border-radius: 20px;
  background: #ffe600;
  position: absolute;
  left: -15px;

  span {
    color: ${Colors.ColorBlack};

    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    text-align: left;

    span {
      font-size: 14px;
      font-weight: 800;
      line-height: 1.42;
      text-align: left;
    }
  }
`;

export const GrowItemTextThree = styled.div`
  padding: 8px 20px 8px 75px;
  border: 1px solid;

  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${Colors.ColorWhite};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  text-align: left;

  border: 1px solid;

  border-image-source: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    radial-gradient(
      66% 388.24% at 0% 50%,
      rgba(255, 230, 0, 0) 100%,
      rgba(255, 230, 0, 0.25) 0%
    );
`;
