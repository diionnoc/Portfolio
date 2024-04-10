// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "providers/Global";
import { ModalProvider } from "providers/Modal";

import Header from "components/_Header";
import Content from "components/_Content";
import Footer from "components/_Footer";
import ScrollToTop from "components/ScrollToTop";
import Carousel from "components/Carousel";

import About from "pages/About";
import ConceptArt from "pages/ConceptArt";
import Illustration from "pages/Illustration";
import Resume from "pages/Resume";
import Error from "pages/Error";

// -------------------------------- COMPONENT -------------------------------- //

export default function App() {
  return (
    <Router>
      <GlobalProvider>
        <ModalProvider>
          <Header />
          <Content>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/concept-art" element={<ConceptArt />} />
              <Route exact path="/illustration" element={<Illustration />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route element={<Error />} />
            </Routes>
          </Content>
          <Footer />
          <ScrollToTop />
          <Carousel />
        </ModalProvider>
      </GlobalProvider>
    </Router>
  );
}
