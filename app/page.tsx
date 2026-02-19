import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getContactInfo, getServices, getProjects, getTestimonials, getAboutInfo, getSiteSettings } from "@/lib/data";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Home() {
  const [contact, services, projects, testimonials, aboutInfo, siteSettings] = await Promise.all([
    getContactInfo(),
    getServices(),
    getProjects(),
    getTestimonials(),
    getAboutInfo(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Header contact={contact} />
      <main>
        <Hero heroImageUrl={siteSettings.hero_image_url} />
        <Services services={services} />
        <Portfolio projects={projects} />
        <About about={aboutInfo} />
        <Testimonials testimonials={testimonials} />
        <Contact contact={contact} />
      </main>
      <Footer contact={contact} />
      <WhatsAppButton contact={contact} />
    </>
  );
}
