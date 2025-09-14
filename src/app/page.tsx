"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider
      theme={{
        styleVariant: "futuristicAndOutOfBox",
        colorTemplate: 2,
        textAnimation: "slide",
      }}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          buttonText="Start Free Trial"
          onButtonClick={() => {}}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "FAQ", id: "faq" },
            { name: "Footer", id: "footer" },
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-r from-[#7C3AED] to-[#22C55E]">
        <VoidHero
          title="Welcome to PulseCloud"
          description="Unlock the potential of your SaaS product with cutting-edge technology"
          tagLabel="Futuristic Solutions"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-[#F7F7FB]">
        <SplitAbout
          description="At PulseCloud, we provide cutting-edge SaaS solutions to elevate your business. Our platform is designed to simplify complex workflows, integrate seamlessly with your tools, and provide you with analytics to drive your strategy forward."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24 bg-[#FFFFFF]">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24 bg-gradient-to-r from-[#7C3AED] to-[#22C55E]">
        <TextGridTokenomics
          title="Our Tokenomics"
          description="Robust and transparent token economy designed for sustainability and growth."
          tokenData={[{ value: "1M", description: "Total Supply" }, { value: "50%", description: "Circulating Supply" }]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24 bg-[#F7F7FB]">
        <CentralFAQ
          items={[
            { title: "What is PulseCloud?", content: "PulseCloud is a SaaS platform that offers solutions to streamline and improve your business processes." },
            { title: "How do I sign up?", content: "You can sign up directly on our website using the 'Get Started' button." },
            { title: "What features do you offer?", content: "We offer a range of features including analytics, integrations, and customer support to help your business thrive." },
            { title: "Is there a free trial available?", content: "Yes, we offer a free trial for 14 days with no credit card required." },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-gradient-to-r from-[#7C3AED] to-[#22C55E]">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="PulseCloud Logo"
          logoText="PulseCloud"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
            { items: [{ label: "Contact", onClick: () => {} }, { label: "Support", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 PulseCloud. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}