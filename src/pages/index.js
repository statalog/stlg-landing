import React from "react";
import Navbar from "./../../components/Navbar";
import Hero from "./../../components/Hero";
import HowItWorks from "./../../components/HowItWorks";
import FaqSection from "./../../components/FaqSection";
import Footer from "./../../components/Footer";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://raw.githubusercontent.com/statalog/prac/master/mysite/images/6.png"
      />
      <Hero
        color="light"
        size="small"
        title="Studies & Research for all"
        subtitle="Sharing knowledge helps us all generate solutions and expedite change."
        buttonText="Request Early Access"
        image="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/content_vbqo.svg"
        buttonOnClick={() => {
          router.push("https://airtable.com/shrv96hjMKONJNdoi");
        }}
      />
      <HowItWorks
        color="white"
        size="medium"
        title="Statalog is Built for You"
        subtitle="No matter what you do for work, fun, or school"
      />
      <FaqSection
        color="white"
        size="small"
        title="FAQs"
        subtitle="Some answers to the questions we hear the most."
      />
      <Footer
        color="light"
        size="small"
        logo="https://cdn.worldvectorlogo.com/logos/statalog.svg"
        description="Studies and research for all to use"
        copyright="© 2019 Company"
      />
    </>
  );
}

export default HomePage;
