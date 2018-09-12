import React from 'react';
import styled from 'styled-components';

const First = () => {
  return (
    <Wrapper>
      <span>First</span>
      <section>
        <p>
          Lorem ipsum dolor amet hashtag you probably haven't heard of them farm-to-table meh craft beer four loko.
          Paleo bushwick disrupt dreamcatcher asymmetrical poke iceland yr. Copper mug brunch deep v tilde actually
          90's. Hell of lumbersexual wolf godard, art party freegan plaid. Waistcoat woke hexagon, succulents ramps
          street art iPhone. Cray portland vaporware cardigan chicharrones, man bun lumbersexual bitters hella etsy
          beard. Everyday carry keffiyeh air plant, squid sartorial put a bird on it 3 wolf moon.
        </p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00d38a;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default First;
