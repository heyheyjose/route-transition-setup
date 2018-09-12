import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './components/Home';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

const Container = ({ location }) => {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{ enter: 1000, exit: 1000 }} classNames="fade">
          <section className="route-section">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 1000ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(Container);
