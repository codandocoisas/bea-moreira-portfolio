import Timeline from "@/components/About/Timeline";
import {
  FadedSubtitle,
  FadedTitle,
} from "@/components/Framer/MotionComponents";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import { poppins, quicksand } from "@/utils/fonts";
import Script from "next/script";

type Props = {};

export default function about({}: Props) {

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-51DXXN4Q2P"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-51DXXN4Q2P');`
        }
      </Script>
      <div
        className={`main-container ${quicksand.variable} ${poppins.variable}`}
      >
        <Header />
        <main
          className={`col-span-full md:col-span-8 md:col-start-3 grid grid-cols-1 items-start justify-items-center gap-y-16 mt-12 text-darker-white font-quicksand`}
        >
          <div className="grid grid-cols-1 gap-y-4">
            <FadedTitle className="text-2xl xl:text-3xl font-bold justify-self-start">
              A little about myself...
            </FadedTitle>
            <FadedSubtitle className="text-sm xl:text-base font-medium leading-9 font-poppins">
              Hello. I&apos;m Beatriz! I&apos;m passionate about the universe of
              design, entrepreneurship, branding, and marketing. I&apos;m always
              looking to learn more about different things, mainly within this
              universe. I consider myself a results-oriented Designer with
              experience in design thinking and human-centered design.
            </FadedSubtitle>
          </div>
          <Timeline />
        </main>
        <Footer />
      </div>
    </>
  );
}
