"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: 'heroImage', url: 'https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vibrant abstract pattern of illuminated red LED lights forming a dynamic design.' },
  { id: 'aboutImage', url: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Top view of a team working on construction plans in an office setting.' },
  { id: 'contactImage', url: 'https://images.pexels.com/photos/2794212/pexels-photo-2794212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A woman sitting against a motivational mural reading 'What You Do Matters' in Birmingham, AL.' },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Services', id: 'services' },
            { name: 'Contact', id: 'contact' },
          ]}
          brandName="Xeven"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Xeven"
            description="Shaping the future of technology"
            tag="Innovate with Us"
            imageSrc="https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: 'Learn More', href: 'about' },
              { text: 'Get Started', href: 'contact' },
            ]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: 'Our Mission', description: 'To deliver cutting-edge solutions', icon: 'ArrowRight' },
              { title: 'Our Team', description: 'Diverse and experienced professionals', icon: 'Star' },
            ]}
            imageSrc="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-blue-50"
            bulletTitleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Reach out to us"
            description="We would love to hear from you"
            imageSrc="https://images.pexels.com/photos/2794212/pexels-photo-2794212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: 'Product', items: [{ label: 'Features', href: 'features' }, { label: 'Pricing', href: 'pricing' }] },
              { title: 'Company', items: [{ label: 'About Us', href: 'about' }, { label: 'Contact', href: 'contact' }] },
            ]}
            className="bg-blue-50"
            copyrightText="© 2025 Xeven, All Rights Reserved"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}