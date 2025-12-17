"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import FeatureCardEleven from '@/components/sections/feature/FeatureCardEleven';
import TeamCardSeven from '@/components/sections/team/TeamCardSeven';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="outline"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Joule"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006671852-2sacssk4.jpg"
          navItems={[
            { name: "Strategy", id: "strategy" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "News", id: "news" }
          ]}
          button={{
            text: "Investors",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="High-conviction investors delivering top asset class returns"
          description="First-check partners for Israeli founders commercializing enterprise-grade solutions in U.S. markets. The right kind of risk."
          tag="Venture Capital"
          tagIcon={Sparkles}
          buttons={[
            { text: "Join Our Portfolio", href: "#contact" },
            { text: "View Strategy", href: "#strategy" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006672713-bb1sdg66.jpg"
          imageAlt="Joule Ventures team collaborating"
          frameStyle="browser"
          metricsLabel="Driving innovation and growth across enterprise markets"
          metrics={[
            { id: "1", value: "$500M+", label: "Assets Under Management" },
            { id: "2", value: "50+", label: "Portfolio Companies" },
            { id: "3", value: "12+", label: "Years of Expertise" }
          ]}
        />
      </div>

      <div id="strategy" data-section="strategy">
        <MediaSplitAbout
          title="Our Strategy"
          description="We are day-one partners for Israeli entrepreneurs solving for an array of problems in the enterprise world. Our focus on forming the right relationships and delivering tangible value cuts a clear path to accelerated U.S. commercialization for founders. Partner only, always."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006673500-iv5vg0la.jpg"
          imageAlt="Strategic partnership collaboration"
          imagePosition="right"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "#portfolio" }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardSix
          title="Portfolio Highlights"
          description="Our carefully selected companies represent the future of enterprise technology"
          products={[
            {
              id: "1",
              name: "Enterprise Security Platform",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006674313-z2cj69xi.jpg",
              imageAlt: "Enterprise security solutions"
            },
            {
              id: "2",
              name: "Cloud Infrastructure",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006674877-ob2u9s73.jpg",
              imageAlt: "Cloud technology platform"
            },
            {
              id: "3",
              name: "AI-Powered Analytics",
              price: "Seed",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006675456-qyhhuze6.jpg",
              imageAlt: "AI analytics engine"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardEleven
          title="Our Investment Process"
          description="Structured approach delivering accelerated outcomes"
          features={[
            {
              id: 1,
              title: "Discovery & Assessment",
              description: "Deep dive into founder vision, market opportunity, and technological differentiation. We assess both the team's capabilities and market timing to identify high-potential Israeli enterprises.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006676165-lbbcgzbp.jpg",
              imageAlt: "Strategic discovery phase"
            },
            {
              id: 2,
              title: "Partnership & Value Add",
              description: "Beyond capital, we provide strategic guidance, U.S. market expertise, and valuable introductions to enterprise customers. Our network becomes your network.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006676998-wqajkom8.jpg",
              imageAlt: "Partnership and mentoring"
            },
            {
              id: 3,
              title: "Scaling & Growth",
              description: "Support your commercialization journey with operational expertise, customer introductions, and follow-on funding strategy. We scale together.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006677840-wsh92mib.jpg",
              imageAlt: "Growth and scaling support"
            }
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          usePrimaryButtonImage={false}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSeven
          team={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006678435-qw9wcpwq.jpg",
              imageAlt: "Principal Investor"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006679515-88z9spw6.jpg",
              imageAlt: "Managing Director"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006680030-8m0opqys.jpg",
              imageAlt: "Investment Officer"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006680900-86s0qg4r.jpg",
              imageAlt: "Operating Partner"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006681895-5t6nijsx.jpg",
              imageAlt: "Business Development"
            }
          ]}
          title="Experienced leadership driving Israeli innovation in enterprise"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Founder Stories"
          description="What our portfolio companies say about partnering with Joule"
          testimonials={[
            {
              id: "1",
              name: "David Cohen",
              handle: "@davidcohen_ceo",
              testimonial: "Joule understood our vision immediately and opened doors we couldn't have opened alone. Their network in the U.S. enterprise market was invaluable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006682478-lsdx6h2z.jpg",
              imageAlt: "David Cohen, CEO"
            },
            {
              id: "2",
              name: "Sarah Mizrahi",
              handle: "@sarahmizrahi",
              testimonial: "More than just capital, Joule provided strategic guidance that fundamentally shaped our go-to-market strategy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006683374-8zlss99y.jpg",
              imageAlt: "Sarah Mizrahi, Founder"
            },
            {
              id: "3",
              name: "Yosef Levi",
              handle: "@yosef_levi",
              testimonial: "The team's deep understanding of both Israeli tech and U.S. enterprise dynamics was a game-changer for our scaling efforts.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006684145-hpjvs19k.jpg",
              imageAlt: "Yosef Levi, CTO"
            },
            {
              id: "4",
              name: "Noa Kaufman",
              handle: "@noakaufman_co",
              testimonial: "Joule's commitment to being day-one partners meant we had support when we needed it most.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006684840-zvrs76a2.jpg",
              imageAlt: "Noa Kaufman, CEO"
            },
            {
              id: "5",
              name: "Ronen Shilo",
              handle: "@ronenshilo",
              testimonial: "Their network and expertise accelerated our U.S. market entry by months. Highly recommended for any Israeli founder.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006685681-kpht1rfv.jpg",
              imageAlt: "Ronen Shilo, Founder"
            },
            {
              id: "6",
              name: "Michal Dayan",
              handle: "@michaldayan",
              testimonial: "The right kind of risk indeed. Joule backed us when others hesitated, and the results speak for themselves.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006686333-hfc08cp7.jpg",
              imageAlt: "Michal Dayan, CEO"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Our portfolio companies partner with and are backed by the world's leading technology companies and enterprises"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006687132-y87ofpov.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006687987-mnyfz72l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006689292-w1dm2461.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006689949-9lmbckyx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006690598-4dgugijy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006691998-di22zfxo.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006692540-ohpx734u.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Partner With Us"
          description="Israeli founders scaling enterprise solutions. Let's accelerate your U.S. commercialization journey together."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your company and vision",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          buttonText="Get In Touch"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006693341-efzcbn3f.jpg"
          imageAlt="Joule Ventures office"
          logoText="Joule"
          copyrightText="© 2024 Joule Ventures. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "#strategy" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Team", href: "#team" },
                { label: "News", href: "#news" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "For Founders", href: "#" },
                { label: "For Investors", href: "#contact" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Email", href: "mailto:hello@joulevc.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}