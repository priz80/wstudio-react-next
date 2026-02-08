"use client";

import { Header } from "../public/component/Header/header";
import { About } from "../public/component/About/about";
import { Portfolio } from "../public/component/Portfolio/portfolio";
import { Tarif } from "../public/component/Tarif/tarif";
import { Forma } from "../public/component/Forma/forma";
import { Contacty } from "../public/component/Contacty/contacty";
import { Footer } from "../public/component/Footer/footer";


import "./fonts.scss";
import "./main-menu.scss";
import "./burger.scss";
import "./button.scss";


export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Tarif />
      <Forma />
      <Contacty />
      <Footer />
    </>
  );
}
