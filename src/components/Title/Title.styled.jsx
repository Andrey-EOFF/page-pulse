import styled from "styled-components";

export const TitleStyle = styled.h2`
  padding-left: 34px;
  margin-bottom: 15px;

  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    margin-right: 6px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
  }
`;
