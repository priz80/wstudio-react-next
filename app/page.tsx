'use client';

import { Header } from "@/Header/header";
import { About } from "@/About/about";
import { Portfolio } from "@/Portfolio/portfolio";
import { Tarif } from "@/Tarif/tarif";
import { Forma } from "@/Forma/forma";
import { Contacty } from "@/Contacty/contacty";
import { Footer } from "@/Footer/footer";


import "./fonts.scss";
/* import "./main-menu.scss"; */
/* import "./burger.scss"; */
import "./aside-menu.scss";


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
