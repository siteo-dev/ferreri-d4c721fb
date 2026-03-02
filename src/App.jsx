import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Products' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { value: 850, suffix: '+', label: 'Happy Customers' },
    { value: 8, suffix: '', label: 'Years of Excellence' },
    { value: 25, suffix: '+', label: 'Unique Flavors' },
    { value: 100, suffix: '%', label: 'Natural Ingredients' }
  ];

  const aboutFeatures = [
    {
      icon: Shield,
      title: "Handcrafted with Care",
      description: "Every candy is made by skilled artisans"
    },
    {
      icon: Award,
      title: "Premium Ingredients",
      description: "Sourced from trusted local suppliers"
    },
    {
      icon: Users,
      title: "Unique Flavors",
      description: "Innovative recipes that surprise and delight"
    },
    {
      icon: Clock,
      title: "Quality Assurance",
      description: "Rigorous testing for the perfect taste"
    }
  ];

  const services = [
    {
      name: "Chocolate Delight",
      description: "Rich dark chocolate with sea salt",
      price: "17 EUR",
      image: "/assets/candy/chocolate.jpg"
    },
    {
      name: "Berry Burst",
      description: "Mixed berry flavors with natural fruit extracts",
      price: "17 EUR",
      image: "/assets/candy/berry.jpg"
    },
    {
      name: "Caramel Dream",
      description: "Smooth caramel with toasted nuts",
      price: "17 EUR",
      image: "/assets/candy/caramel.jpg"
    },
    {
      name: "Mint Bliss",
      description: "Refreshing mint with creamy texture",
      price: "17 EUR",
      image: "/assets/candy/mint.jpg"
    }
  ];

  const whyUsFeatures = [
    { 
      Icon: Shield, 
      name: "Quality First", 
      description: "Every product undergoes strict quality control before reaching your hands" 
    },
    { 
      Icon: Award, 
      name: "Expert Craftsmanship", 
      description: "Award-winning techniques passed down through generations" 
    },
    { 
      Icon: Users, 
      name: "Customer Focus", 
      description: "We listen to feedback and continuously improve our offerings" 
    },
    { 
      Icon: Clock, 
      name: "Freshness Guaranteed", 
      description: "All products made daily with ingredients at peak freshness" 
    }
  ];

  const reviews = [
    {
      name: "Maria C.",
      role: "F",
      text: "The chocolate delight is absolutely divine! I can't get enough of the sea salt finish.",
      avatar: "/assets/people/girl_1.jpg"
    },
    {
      name: "David M.",
      role: "M",
      text: "Berry burst has become my daily treat. The natural fruit extracts make such a difference.",
      avatar: "/assets/people/boy_1.jpg"
    },
    {
      name: "Sophie R.",
      role: "F",
      text: "Caramel dream with toasted nuts gives me the perfect balance of sweet and crunchy textures.",
      avatar: "/assets/people/girl_1.jpg"
    }
  ];

  const faqItems = [
    {
      question: "How long do your candies last?",
      answer: "Our candies are best consumed within 3 months of purchase for optimal freshness and taste quality."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with careful packaging to ensure your sweets arrive fresh and intact."
    },
    {
      question: "Are your products suitable for people with allergies?",
      answer: "We clearly label all ingredients and provide detailed allergen information upon request."
    },
    {
      question: "Can I customize orders for special occasions?",
      answer: "Absolutely! We offer personalized candy boxes for birthdays, weddings, and corporate events."
    },
    {
      question: "Where can I find your products?",
      answer: "You can purchase directly from our website or visit our shop in Bragadiru for an authentic tasting experience."
    },
    {
      question: "Do you use organic ingredients?",
      answer: "While we prioritize quality ingredients, most of our products use conventionally grown fruits and vegetables."
    }
  ];

  const contactItems = [
    { icon: Phone, label: "Call", value: "757289370" },
    { icon: Mail, label: "Email", value: "office@ferrero.com" },
    { icon: MapPin, label: "Address", value: "Bragadiru" }
  ];

  return (
    <>
      <DemoBanner />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Ferreri</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip bg-background"
      >
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#f4bc17" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="hero-blur hero-delay-1 mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Premium Artisanal Candy</AnimatedShinyText>
            </div>
          </div>
          
          <h1 className="hero-blur hero-delay-2 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6">
            Taste the Difference
          </h1>
          
          <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Experience the art of artisanal candy making with Ferreri's premium collection. Handcrafted with passion and the finest ingredients since 2016.
          </p>
          
          <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton className="shadow-2xl btn-hover" background="rgba(244,188,23, 1)">
              <span className="text-sm font-medium text-black">Visit Our Shop</span>
            </ShimmerButton>
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
          
          <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-4xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(244,188,23,0.6)]" 
                />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">
              Crafted with Passion Since 2016
            </h2>
            <p className="text-lg text-muted-foreground animate-on-scroll">
              Ferreri brings you the finest handcrafted candies made with love and attention to detail. Our journey began in Bragadiru with a simple vision: to create exceptional sweets that delight.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
            {aboutFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                      <feature.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-amber-50 transition-colors">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">
              Indulge in Our Premium Collection
            </h2>
            <p className="text-lg text-muted-foreground animate-on-scroll">
              Discover our carefully crafted candy selections, each with distinct flavors and textures designed to satisfy your sweet cravings.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-50 transition-colors">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <Separator className="mb-5 bg-white/[0.06]" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <ShimmerButton className="shadow-2xl btn-hover" background="rgba(244,188,23, 1)">
                      <span className="text-sm font-medium text-black">Book Now</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">
              Why Choose Ferreri?
            </h2>
            <p className="text-lg text-muted-foreground animate-on-scroll">
              Our commitment to excellence sets us apart in the world of artisanal candy making.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index} 
                className={cn("hover:border-amber-500/20", index === 0 ? "col-span-3 lg:col-span-1" : index === 1 ? "col-span-3 lg:col-span-2" : index === 2 ? "col-span-3 lg:col-span-2" : "col-span-3 lg:col-span-1")}
                background={
                  index === 1 ? (
                    <DotPattern opacity={0.04} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent" />
                  )
                }
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                    <feature.Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-amber-50 transition-colors">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">
              What Our Sweet Tooth Community Says
            </h2>
            <p className="text-lg text-muted-foreground animate-on-scroll">
              Real experiences from people who've tasted our premium candies.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover mx-4 max-w-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="mr-3">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">
              Everything You Need to Know About Ferreri
            </h2>
            <p className="text-lg text-muted-foreground animate-on-scroll">
              Frequently asked questions about our premium candy collection.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="multiple" className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/[0.05] mb-4 rounded-xl">
                  <AccordionTrigger className="text-left hover:bg-white/[0.02] transition-colors py-4 px-6 rounded-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40 bg-background">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">
              Let's Connect and Share Sweetness
            </h2>
            <p className="text-lg text-muted-foreground animate-on-scroll">
              Ready to discover the exceptional taste of Ferreri? Get in touch with us today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex flex-wrap gap-4 mt-8">
                <ShimmerButton className="shadow-2xl btn-hover" background="rgba(244,188,23, 1)">
                  <span className="text-sm font-medium text-black">WhatsApp Us</span>
                </ShimmerButton>
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            
            <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe 
                src={"https://www.google.com/maps?q=" + encodeURIComponent("Bragadiru") + "&output=embed"} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-16 pb-32">
        <Separator className="mb-8" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Ferreri. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/ferrero" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/[0.05] h-10 w-10">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </>
  );
}
