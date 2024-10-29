import React, { useState } from "react";
import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import ContentSection from '../components/contentSection/contentSection.component';
import Footer from '../components/footer/footer.component';
import useHome from "../hooks/useHome";
const HomePage = () => {
  const { hero,sectionData,items } = useHome();

  return (
    <div className="App">
      <Header />

      <div>
        <Hero data={hero} />
        <section className="content-sections">

        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
