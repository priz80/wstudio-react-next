'use client';

import { Header } from "@components/Header/header";
import { About } from "@components/About/about";
import { Portfolio } from "@components/Portfolio/portfolio";
import { Tarif } from "@components/Tarif/tarif";
import { Forma } from "@components/Forma/forma";
import { Contacty } from "@components/Contacty/contacty";
import { Footer } from "@components/Footer/footer";


import "./fonts.scss";
import "./main-menu.scss";
import "./burger.scss";
/* import "./button.scss"; */


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
