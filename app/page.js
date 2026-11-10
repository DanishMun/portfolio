import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Design from "../components/Design";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import StructuredData from "../components/StructuredData";

// The whole site is one page, in six numbered "sheets".
export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Work />
        <Design />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
