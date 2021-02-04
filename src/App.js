import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalProvider } from "Global";
import { ModalProvider } from "Modal";

import Header from "components/_Header";
import Content from "components/_Content";
import Footer from "components/_Footer";
import ScrollToTop from "components/ScrollToTop";
import Carousel from "components/Carousel";

import About from "pages/About";
import CharacterDesign from "pages/CharacterDesign";
import Illustration from "pages/Illustration";
import Design from "pages/Design";
import Photography from "pages/Photography";
import Resume from "pages/Resume";
import Error from "pages/Error";

//////////////////////// COMPONENT ////////////////////////
export default function App() {
  return (
    <Router>
      <GlobalProvider>
        <ModalProvider>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={() => <About />} />
              <Route exact path="/character-design" component={() => <CharacterDesign />} />
              <Route exact path="/illustration" component={() => <Illustration />} />
              <Route exact path="/design" component={() => <Design />} />
              <Route exact path="/photography" component={() => <Photography />} />
              <Route exact path="/resume" component={() => <Resume />} />
              <Route component={() => <Error />} />
            </Switch>
          </Content>
          <Footer />
          <ScrollToTop />
          <Carousel />
        </ModalProvider>
      </GlobalProvider>
    </Router>
  );
}
