import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoBar from "./components/InfoBar";
import Nosotros from "./components/Nosotros";
import Galeria from "./components/Galeria";
import Servicios from "./components/Servicios";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  useEffect(() => {
    if (history.scrollRestoration) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <InfoBar />
      <Nosotros />
      <Galeria />
      <Servicios />
      <CtaBand />
      <Footer />
      <WhatsAppFab />
    </>
  );
}
