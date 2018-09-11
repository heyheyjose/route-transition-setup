import React from 'react';
import styled from 'styled-components';

const Third = () => {
  return (
    <Wrapper>
      <span>Third</span>
      <section>
        <p>
          Curabitur eu feugiat magna, ut malesuada est.
          {/* omitted */}
        </p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* omitted */
`;

export default Third;
