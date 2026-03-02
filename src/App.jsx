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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Products' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 850, suffix: '+', label: 'Happy Customers' },
    { value: 100, suffix: '%', label: 'Natural Ingredients' },
    { value: 5, suffix: '', label: 'Star Rating' },
    { value: 8, suffix: '', label: 'Years of Excellence' }
  ];

  const whyUsFeatures = [
    { 
      Icon: Shield, 
      name: "Quality Assurance", 
      description: "Every candy is tested for the highest standards of taste and safety",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent" />
    },
    { 
      Icon: Award, 
      name: "Expertise", 
      description: "Over 8 years of experience crafting premium candies with traditional methods",
      className: "col-span-3 lg:col-span-2",
      background: <DotPattern opacity={0.15} className="absolute inset-0" />
    },
    { 
      Icon: Users, 
      name: "Customer Satisfaction", 
      description: "95% of our customers return for more of our unique flavors",
      className: "col-span-3 lg:col-span-2",
      background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent" />
    },
    { 
      Icon: Clock, 
      name: "Freshness", 
      description: "All candies are made daily to ensure peak freshness and flavor",
      className: "col-span-3 lg:col-span-1",
      background: <DotPattern opacity={0.15} className="absolute inset-0" />
    }
  ];

  const reviews = [
    {
      name: "Maria G.",
      gender: "F",
      text: "The chocolate hazelnut candy is absolutely divine. I've tried many brands but none compare to Ferreri."
    },
    {
      name: "James T.",
      gender: "M",
      text: "I love the smooth caramel notes mixed with rich chocolate. Perfect for my afternoon treat."
    },
    {
      name: "Sophie L.",
      gender: "F",
      text: "The texture and taste are incredible. These candies make every day a little sweeter."
    }
  ];

  const faqItems = [
    {
      question: "How long do your candies stay fresh?",
      answer: "Our candies are best consumed within 2 weeks of purchase for peak freshness."
    },
    {
      question: "Are your candies suitable for people with allergies?",
      answer: "We clearly label all ingredients. Please check our product pages for allergen information."
    },
    {
      question: "Do you offer bulk orders for events?",
      answer: "Yes, we provide custom packaging and volume discounts for special occasions."
    },
    {
      question: "Where can I purchase your candies?",
      answer: "You can buy directly from our website or visit our location in Bragadiru."
    },
    {
      question: "What makes your candies different from others?",
      answer: "Our unique recipes combine traditional techniques with premium ingredients for unmatched taste."
    },
    {
      question: "Can I customize flavors for special occasions?",
      answer: "Absolutely, we offer private label options for weddings and corporate events."
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
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
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      name: "Candy 1",
      description: "Rich chocolate with hazelnut and caramel notes",
      price: "17 EUR"
    }
  ];

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Ferreri</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors">{link.label}</a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          )}
        </div>
      </header>

      <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
        <div className="absolute inset-0 z-0">
          <LightRays raysOrigin="top-center" raysColor="#f4bc17" raysSpeed={1} lightSpread={isMobile ? 2 : 0.5} rayLength={isMobile ? 3 : 1} followMouse={true} mouseInfluence={0.05} noiseAmount={0} distortion={0} pulsating={false} fadeDistance={1} saturation={1} />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="hero-blur hero-delay-1 mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Premium Handcrafted Candies</AnimatedShinyText>
            </div>
          </div>
          
          <div className="hero-blur hero-delay-2 max-w-4xl mx-auto mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Indulge in Exceptional Taste
            </h1>
          </div>
          
          <div className="hero-blur hero-delay-3 mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2016, Ferreri has been crafting premium handcrafted candies that delight your senses with unparalleled flavor and quality.
            </p>
          </div>
          
          <div className="hero-blur hero-delay-4 mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShimmerButton className="shadow-2xl" background="rgba(244,188,23, 1)">
              <span className="text-sm font-medium text-black">Book Now</span>
            </ShimmerButton>
            
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
              Contact Us
            </Button>
          </div>
          
          <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                <NumberTicker value={stat.value} suffix={stat.suffix} className="text-4xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(244,188,23,0.6)]" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Crafting Sweet Memories Since 2016
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Ferreri began with a simple passion for creating candies that taste as good as they look. Our journey has been one of continuous innovation and dedication to quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: Shield, name: "Handcrafted with Care", description: "Each candy is made by hand with attention to detail" },
              { icon: Award, name: "Natural Ingredients Only", description: "We use only the finest natural ingredients in our recipes" },
              { icon: Users, name: "Traditional Recipes", description: "Our recipes have been passed down through generations of craftsmanship" },
              { icon: Clock, name: "Premium Quality Assurance", description: "Every product undergoes rigorous quality testing before reaching you" }
            ].map((item, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-amber-50 transition-colors">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Treats That Delight Your Senses
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Each candy in our collection is crafted with passion and precision to deliver unforgettable flavors.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,188,23,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-50 transition-colors">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <Separator className="mb-5 bg-white/[0.06]" />
                      <div className="text-2xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <ShimmerButton className="shadow-2xl w-full" background="rgba(244,188,23, 1)">
                    <span className="text-sm font-medium text-black">Book Now</span>
                  </ShimmerButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Choose Ferreri?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We stand out through our commitment to quality, tradition, and exceptional taste.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard key={index} className={cn(feature.className, "hover:border-amber-500/20")} background={feature.background}>
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

      <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real experiences from real customers who've indulged in our premium treats.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 card-hover max-w-sm mx-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} colorFrom="#f4bc17" colorTo="#f4bc17" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1' : 'girl_1'}.jpg`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{review.name}</p>
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

      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about our premium candies.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="animate-on-scroll delay-1 border-white/[0.06] rounded-xl bg-white/[0.02]">
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/[0.03] transition-colors duration-200">
                    <span className="font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get in touch to place an order or inquire about our premium candy collection.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Phone</h3>
                      <p className="text-muted-foreground">757289370</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">office@ferrero.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Address</h3>
                      <p className="text-muted-foreground">Bragadiru</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
                  <Instagram className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <ShimmerButton className="shadow-2xl col-span-2" background="rgba(244,188,23, 1)">
                  <span className="text-sm font-medium text-black">Visit Location</span>
                </ShimmerButton>
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

      <footer className="relative pt-8 pb-32">
        <Separator className="mb-8 bg-white/[0.06]" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Ferreri. All rights reserved.
          </p>
          
          <div className="flex gap-3">
            <a href="https://instagram.com/ferrero" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-amber-500/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
}
