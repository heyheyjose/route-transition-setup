import React from 'react';
import styled from 'styled-components';

const Second = () => {
  return (
    <Wrapper>
      <span>Second</span>
      <section>
        <p>
          Schlitz street art trust fund, austin cliche offal leggings single-origin coffee chambray paleo pinterest
          irony hammock pitchfork hashtag. Hammock selvage pitchfork raclette. Echo park yr kickstarter glossier
          gentrify schlitz twee, wolf gluten-free cornhole poke raclette plaid cold-pressed +1. Vinyl trust fund
          crucifix celiac. Master cleanse retro forage 3 wolf moon. Mlkshk tacos fanny pack aesthetic, echo park
          sartorial pickled bicycle rights. Selfies roof party subway tile, celiac ennui stumptown hella you probably
          haven't heard of them vape disrupt chillwave kombucha.
        </p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00bfff;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Second;
