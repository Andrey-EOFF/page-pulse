import styled from "styled-components";
import { Colors } from "../../styles/variables";

import InfoIconInfo from "../../Images/svg/icon-info.svg";
import IconA from "../../Images/svg/icon-a.svg";

export const InfoMusicWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 53px;
  background-color: ${Colors.BgColorMusic};
`;

export const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 27px 40px 31px 40px;
  border-bottom: 1px solid #ffffff08;
`;

export const InfoBlockOne = styled.div`
  display: flex;
  margin-right: 138px;
`;

export const InfoImage = styled.img`
  display: block;

  background-color: #8c75eb;

  border-radius: 50%;
  margin-right: 20px;
  width: 80px;
  height: 80px;

  margin-right: 20px;
`;

export const InfoStatus = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: ${Colors.ColorGrey};

  font-size: 12px;
  font-weight: 600;
  line-height: 1.7;
  text-align: left;
`;
export const InfoArtist = styled.p`
  margin-bottom: 6px;

  color: ${Colors.ColorWhite};

  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  text-align: left;
`;

export const InfoIconStatus = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${InfoIconInfo});
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const InfoSound = styled.p`
  margin-bottom: 8px;

  color: ${Colors.ColorWhite};

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  text-align: left;
`;

export const InfoType = styled.p`
  display: inline-flex;
  align-items: center;
  margin-bottom: 8px;

  color: ${Colors.ColorGrey};

  font-size: 12px;
  font-weight: 600;
  line-height: 14.63px;
  text-align: left;

  span {
    margin-left: 5px;
    padding: 3px 15px 3px 15px;
    border-radius: 20px;

    color: #6993ff;
    background: #27459140;

    font-size: 10px;
    font-weight: 700;
    line-height: 1.8;
    letter-spacing: 0.04em;
    text-align: left;
  }
`;

export const InfoIconList = styled.ul`
  display: flex;
`;

export const InfoIcon = styled.li`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const InfoBlockTwo = styled.div`
  margin-right: 74px;
  display: flex;
  flex-direction: column;
`;

export const InfoItemTrend = styled.p`
  margin-bottom: 13px;
  color: ${Colors.ColorWhite};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.21;
  text-align: left;
`;

export const InfoItemDuration = styled.p`
  margin-bottom: 8px;
  color: ${Colors.ColorGrey};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.21;
  text-align: left;

  span {
    color: ${Colors.ColorWhite};
    margin-left: 10px;

    font-size: 12px;
    font-weight: 600;
    line-height: 1.7;
    text-align: left;
  }
`;

export const InfoBirtateBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoItemBitrate = styled.p`
  color: ${Colors.ColorGrey};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.21;
  text-align: left;
`;

export const BitrateImage = styled.img`
  margin-left: 5px;
  width: 66px;
  height: 24px;
`;

export const InfoBlockThree = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const InfoBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 23px;
`;

export const InfoItemCountry = styled.li`
  display: flex;
  align-items: center;
  color: ${Colors.ColorGrey};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.21;
  text-align: left;

  span {
    margin-left: 8px;
    color: ${Colors.ColorWhite};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.21;
    text-align: left;
  }

  &:nth-child(-n + 2) {
    margin-bottom: 15px;
  }
`;

export const FlagImage = styled.img`
  margin-left: 10px;
  width: 21px;
  height: 15px;
`;

export const InfoItemText = styled.button`
  color: ${Colors.ColorWhite};
  background-color: ${Colors.BgColorTextSound};
  border-radius: 30px;
  padding: 5px 15px 5px 15px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.7;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${IconA});
    background-repeat: no-repeat;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const InfoKeywords = styled.div`
  height: 50px;
  border-top: 1px solid #ffffff08;
  display: flex;
  align-items: center;

  padding-left: 40px;
`;

export const KeywordsTitle = styled.h3`
  margin-right: 10px;
  color: ${Colors.ColorGrey};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.22;
  text-align: left;
`;

export const KeywordsList = styled.ul`
  display: flex;
  align-items: center;

  color: ${Colors.ColorWhite};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-align: left;
`;

export const KeywordsItem = styled.li`
  padding: 4px 10px;
  background-color: ${Colors.BgColorSecond};
  border-radius: 20px;
  margin-right: 5px;
`;
