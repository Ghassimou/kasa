import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";
import appartments from "../../datas/data.json";
import homeBanner from "../../assets/images/banner/home-banner.png"

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
        <Gallery appartments={appartments}/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;


