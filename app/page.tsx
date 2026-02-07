import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import Philosophy from "@/components/Philosophy";
import ServiceTiers from "@/components/ServiceTiers";
import ReadyToBegin from "@/components/ReadyToBegin";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Portfolio />
        <Philosophy />
        <ServiceTiers />
        <ReadyToBegin />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
