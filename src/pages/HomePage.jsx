import React from "react";
import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import ContentSection from '../components/contentSection/contentSection.component';
import Footer from '../components/footer/footer.component';
import useHome from "../hooks/useHome";
import useSections from "../hooks/useSections";
import useFooter from "../hooks/useFooter";
const HomePage = () => {
  
  const { hero, items } = useHome();
  const sectionData = useSections(items);
  const footerData = useFooter();

  return (
    <div className="App">
      <Header />
      <div>
        <Hero data={hero} />
        <section className="content-sections">
          {
            items && Object.keys(sectionData).length !== 0 ?
              items.map((item, index) => (
                <ContentSection key={index} data={sectionData[item.name]} item={item}/>
              )) : ""}
        </section>
      </div>
      <Footer data={footerData}/>
    </div>
  );
}

export default HomePage;
