import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './utils/Global';
import { ModalProvider } from './utils/Modal';

import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import CharacterDesign from './components/CharacterDesign';
import Illustration from './components/Illustration';
import Design from './components/Design';
import Photography from './components/Photography';
import Resume from './components/Resume';
import Lost from './components/Lost';
import Carousel from './components/Carousel';

export default function App() {
  return (<>
    <Router>
      <GlobalProvider>
        <ModalProvider>
          <Carousel />
          <Nav />
          <Switch>
            <Route exact path="/" component={() => <About />} />
            <Route exact path="/character-design" component={() => <CharacterDesign />} />
            <Route exact path="/illustration" component={() => <Illustration />} />
            <Route exact path="/design" component={() => <Design />} />
            <Route exact path="/photography" component={() => <Photography />} />
            <Route exact path="/resume" component={() => <Resume />} />
            <Route component={() => <Lost />} />
          </Switch>
          <Footer />
        </ModalProvider>
      </GlobalProvider>
    </Router>
  </>)
}