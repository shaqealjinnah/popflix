import { useState } from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import axios from "axios";
import HomeSearch from "../components/HomeSearch";
import { useNavigate } from "react-router-dom";

function Home({ text, setText}) {
  const navigate = useNavigate();
  

  return (
    <>
      <section id="landing">
        <Nav />
        <HomeSearch text={text} setText={setText} navigate={navigate} />
      </section>
      <Banner />
    </>
  );
}

export default Home;
