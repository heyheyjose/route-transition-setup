import React from 'react';
import styled from 'styled-components';

const Third = () => {
  return (
    <Wrapper>
      <span>Third</span>
      <section>
        <p>
          Umami raw denim viral wayfarers sriracha chicharrones slow-carb. YOLO tumeric actually letterpress tbh,
          asymmetrical craft beer vice post-ironic. Forage selvage bespoke, asymmetrical lyft food truck salvia. Butcher
          banjo cred, pug meditation freegan tousled typewriter poke actually pabst. Kinfolk fanny pack godard, hell of
          tote bag raw denim lomo meggings fingerstache listicle man braid. YOLO thundercats chartreuse, mustache subway
          tile mumblecore succulents retro tousled hot chicken raclette.
        </p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #f76565;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Third;
