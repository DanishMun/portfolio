import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Design from "../components/Design";
import About from "../components/About";
import Contact from "../components/Contact";

// The whole site is one page, in five numbered "sheets".
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Design />
        <About />
        <Contact />
      </main>
    </>
  );
}
