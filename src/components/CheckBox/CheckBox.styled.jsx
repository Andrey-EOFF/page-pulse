import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const RelatedBlock = styled.section`
  width: 100%;

  display: flex;
  color: white;
  background-color: ${Colors.BgColorSecond};
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;
    padding-left: 35px;
    font-size: 16px;
    line-height: 1.5;
    user-select: none;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border: 1px solid #ccc;
  }

  input[type="checkbox"]:checked + .checkmark:after {
    content: "";
    position: absolute;
    display: block;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #000;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const NestedCheckbox = styled.div`
  margin-left: 20px;
`;
