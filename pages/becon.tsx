import Footer from "@/components/Global/Footer";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Becon/Hero";
import Introduction from "@/components/Becon/Introduction";
import Problems from "@/components/Becon/Problems";
import { quicksand, poppins } from "@/utils/fonts";
import Persona from "@/components/Becon/Persona";
import Userflow from "@/components/Becon/Userflow";
import SideMenu from "@/components/Becon/SideMenu";
import Role from "@/components/Becon/Role";
import Solution from "@/components/Becon/Solution";
import BeforeAndAfter from "@/components/Becon/BeforeAndAfter";
import Header from "@/components/Global/Header";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/icons/loading.json";

type Props = {};

export default function Becon({}: Props) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 items-center justify-items-center h-[100vh] w-[100vw]">
          <Lottie
            className="h-32 w-32 transition-all delay-300"
            animationData={loadingAnimation}
          />
        </div>
      ) : (
        <main
          className={`main-container ${quicksand.variable} ${poppins.variable}`}
        >
          <Header />
          <Hero />
          <div className="side-menu-container">
            <SideMenu />
          </div>
          <div className="sections-container">
            <Introduction />
            <Role />
            <Problems />
            <Solution />
            <Persona />
            <Userflow />
            <BeforeAndAfter />
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}
