import styled from "styled-components";
import { Colors } from "../../styles/variables";
import IconVector from "../../Images/svg/icon-vector.svg";
import IconLock from "../../Images/svg/icon-lock.svg";

export const RelatedBlock = styled.div`
  margin: 20px;
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NestedCheckbox = styled.div`
  position: relative;
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  label::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -20px;

    background-image: url(${IconVector});
    width: 14.5px;
    height: 19.5px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const CheckboxLabel = styled.label`
  position: relative;
  margin-bottom: 10px;
  padding-left: 30px;

  color: ${Colors.ColorWhite};
  cursor: pointer;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-align: left;

  & input:checked ~ .checkmark {
    background-color: ${Colors.BgAkcentYelow};
    width: 10px;
    height: 10px;
    top: 5px;
    left: 10px;

    outline: 5px solid #ffffff1a;
  }
`;

export const CheckboxLabelLock = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 8px 20px 8px 30px;
  background-color: ${Colors.BgColorSecond};

  color: ${Colors.ColorGrey};

  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-align: left;

  pointer-events: none;

  & input:checked ~ .checkmark {
    background-color: ${Colors.BgAkcentYelow};

    width: 10px;
    height: 10px;
    top: 13px;
    left: 10px;
    outline: 5px solid #ffffff1a;
  }

  span {
    left: 5px;
  }
`;

export const LabelLockText = styled.span`
  position: relative;
  color: ${Colors.ColorAkcentYelow};
  margin-left: 30px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.22;
  text-align: left;

  &::before {
    content: "";
    position: absolute;
    top: 0px;

    left: -20px;
    background-image: url(${IconLock});
    width: 16px;
    height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  margin-left: 10px;
  height: 20;
  width: 20;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  position: absolute;
  left: 5px;
  height: 20px;
  width: 20px;
  background-color: inherit;
  border: 1px solid #ffffff1a;
`;
