import React from "react";
import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import ContentSection from '../components/contentSection/contentSection.component';
import Footer from '../components/footer/footer.component';
import useHome from "../hooks/useHome";
import useSections from "../hooks/useSections";
const HomePage = () => {
  const { hero, items } = useHome();
  const sectionData = useSections(items);
  return (
    <div className="App">
      <Header />
      <div>
        <Hero data={hero} />
        <section className="content-sections">
          {
            items && Object.keys(sectionData).length !== 0 ?
              items.map((item, index) => (
                <ContentSection key={index} data={sectionData[item.name]} />
              )) : ""}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
