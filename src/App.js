import React from "react";
import AdvStats from "./components/Sections/AdvStats/AdvStats";
import Boost from "./components/Sections/Boost/Boost";
import Footer from "./components/Sections/Footer/Footer";
import HeaderNav from "./components/Sections/HeaderNav/HeaderNav";
import Intro from "./components/Sections/Intro/Intro";
import Section from "./components/Sections/Section";
import Shorter from "./components/Sections/Shorter/Shorter";


function App() {

  return (
    <div className="App">

      <nav>
        <Section sectionId="headerNav" bg="white">
          <HeaderNav />
        </Section>
      </nav>

      <main>
        <Section sectionId="intro">
          <Intro />
        </Section>

        <Shorter />

        <Section bg={"gray"} sectionId="advStats">
          <AdvStats />
        </Section>
        <Boost />

      </main>
      <Section bg={"dark"} sectionId="footer">
        <Footer />
      </Section>

    </div>
  );
}

export default App;
