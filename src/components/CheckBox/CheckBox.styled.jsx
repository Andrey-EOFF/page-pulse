import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const RelatedBlock = styled.div`
  margin: 20px;
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NestedCheckbox = styled.div`
  margin-left: 20px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
`;

export const CheckboxLabel = styled.label`
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;

  color: ${Colors.ColorWhite};

  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-align: left;

  &:hover input ~ .checkmark {
    width: 20px;
    height: 20px;
    background-color: ${Colors.BgAkcentViolet};
  }

  & input:checked ~ .checkmark {
    background-color: ${Colors.BgAkcentYelow};
    width: 10px;
    height: 10px;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: inherit;
  border: 1px solid #ffffff1a;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  &:after {
    width: 20px;
    height: 20px;
    border: 1px solid #ffffff1a;
  }
`;
