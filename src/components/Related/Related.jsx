import React from "react";
import { Colors } from "../../styles/variables";
import Title from "../Title/Title";
import {
  RELATED_NOTIFY_TEXT,
  RELATED_TITLE_FIRST,
  RELATED_TITLE_NEXT,
} from "../../utils/texts";
import { Container } from "../../styles/GlobalStyles";
import {
  Button,
  RelatedBlock,
  RelatedText,
  RelatedWrapper,
} from "./Related,styled";

import IconRelated from "../../Images/svg/icon-related.svg";
import IconBigBell from "../../Images/svg/icon-bigbell.svg";

const Related = () => {
  return (
    <>
      <RelatedWrapper>
        <Container>
          <Title color={Colors.ColorWhite} icon={IconRelated}>
            <span>{RELATED_TITLE_FIRST}</span> {RELATED_TITLE_NEXT}
          </Title>

          <RelatedBlock>
            <img src={IconBigBell} alt="icon big ball" />
            <RelatedText>{RELATED_NOTIFY_TEXT}</RelatedText>
            <Button type="button">Notify Me</Button>
          </RelatedBlock>
        </Container>
      </RelatedWrapper>
    </>
  );
};

export default Related;
