import {
  Navbar,
  Hero,
  LogoCloud,
  Features,
  HowItWorks,
  Testimonials,
  FAQ,
  CTA,
  Footer
} from './sections';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;