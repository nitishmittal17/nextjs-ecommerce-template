import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <CounDown />
      <Testimonials />
      <Newsletter />
      {/* HubSpot feedback form – uncomment to enable */}
      {/*
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="ac7c7ed1-4fda-4895-93e6-bc6e15f9bb14"
        data-portal-id="45744167"
      ></div>
      */}
    </main>
  );
};

export default Home;
