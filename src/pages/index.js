"use client";

import Aboutme from "@/components/HomePage/Aboutme";
import Banner from "@/components/HomePage/Banner";
import Projects from "@/components/HomePage/Projects";
import Skills from "@/components/HomePage/Skills";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <Skills />
      <Aboutme />
    </div>
  );
};
export default HomePage;
