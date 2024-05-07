import React from "react";
import { Colors } from "../../styles/variables";
import { Container } from "../../styles/GlobalStyles";

import IconRecomd from "../../Images/svg/icon-recommendation.svg";
import { RECOMMENDATION_TITLE_FIRST, RECOMMENDATION_TITLE_NEXT } from "../../utils/texts";
import Title from "../Title/Title";

const Recomd = () => {
  return (
    <section>
          <Container>
          <Title color={Colors.ColorWhite} icon={IconRecomd}>
            <span>{RECOMMENDATION_TITLE_FIRST}</span> {RECOMMENDATION_TITLE_NEXT}
          </Title>
              
      </Container>
    </section>
  );
};

export default Recomd;
