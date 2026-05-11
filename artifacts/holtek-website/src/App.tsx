import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Server, Cloud, Cpu, Workflow, BarChart3, CheckCircle2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

// Fade up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Home() {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message received.",
      description: "We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white p-6 md:p-8 flex justify-between items-center pointer-events-none">
        <div className="font-display font-bold text-xl tracking-tight pointer-events-auto">
          HOLTEK<span className="text-secondary">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide pointer-events-auto">
          <a href="#services" className="hover:text-secondary transition-colors" data-testid="link-services">Services</a>
          <a href="#about" className="hover:text-secondary transition-colors" data-testid="link-about">Approach</a>
          <a href="#contact" className="hover:text-secondary transition-colors" data-testid="link-contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24">
        {/* Background Image / Texture */}
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
          <img src="/hero-bg.png" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl"
          style={{ opacity, y }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
            <span className="inline-block py-1 px-3 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6" data-testid="badge-tagline">
              Technology Consulting
            </span>
          </motion.div>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp} 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.05] tracking-tight mb-8 text-primary"
            data-testid="heading-main"
          >
            Systems that work.<br />
            <span className="text-muted-foreground/60">Business that flows.</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-10"
            data-testid="text-mission"
          >
            Practical technology, cloud, IT, and business process solutions for organizations, nonprofits, and growing businesses. We help clients streamline operations, improve workflows, and implement reliable digital systems.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Button size="lg" className="h-14 px-8 text-base shadow-lg" asChild data-testid="button-hero-cta">
              <a href="#contact">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Our Capabilities</h2>
              <p className="text-primary-foreground/70 text-lg md:text-xl">
                We don't sell buzzwords. We build, optimize, and maintain the infrastructure that keeps your organization running quietly and efficiently.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {[
              {
                icon: <Cloud className="h-8 w-8 mb-6 text-secondary" />,
                title: "Cloud Solutions",
                desc: "Secure, scalable cloud architecture tailored to your operational needs. Migration, management, and optimization."
              },
              {
                icon: <Server className="h-8 w-8 mb-6 text-secondary" />,
                title: "IT Infrastructure",
                desc: "Reliable networks and systems design. We ensure your physical and virtual infrastructure is robust and secure."
              },
              {
                icon: <Workflow className="h-8 w-8 mb-6 text-secondary" />,
                title: "Workflow Optimization",
                desc: "Identifying bottlenecks and implementing digital tools to remove friction from your daily operations."
              },
              {
                icon: <Cpu className="h-8 w-8 mb-6 text-secondary" />,
                title: "System Implementation",
                desc: "Seamless deployment of new digital platforms, CRMs, and management tools with minimal disruption."
              },
              {
                icon: <BarChart3 className="h-8 w-8 mb-6 text-secondary" />,
                title: "Process Automation",
                desc: "Automating repetitive tasks to free up your team for high-value work and strategic initiatives."
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="group border-t border-primary-foreground/10 pt-8" data-testid={`card-service-${i}`}>
                {service.icon}
                <h3 className="text-xl font-display font-medium mb-3">{service.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="h-[50vh] md:h-[70vh] w-full relative">
        <img src="/services-it.png" alt="IT Infrastructure" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
      </section>

      {/* Approach/About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 text-primary">Grounded expertise.<br/>No nonsense.</h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                Based in Sacramento, Holtek Solutions LLC was founded on a simple principle: technology should solve problems, not create them.
              </p>
              <p>
                We partner with nonprofits, growing businesses, and established organizations who need their digital infrastructure to be invisible, reliable, and secure. You don't have time to manage complex IT — that's why we're here.
              </p>
            </div>
            
            <ul className="mt-10 space-y-4">
              {[
                "Direct communication, no tech jargon",
                "Practical solutions over flashy trends",
                "Long-term reliability and support",
                "Tailored to your specific organizational scale"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="aspect-square bg-muted relative"
          >
            <img src="/sacramento.png" alt="Sacramento abstract" className="w-full h-full object-cover mix-blend-darken opacity-80" />
            <div className="absolute inset-0 border border-border m-4"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 text-primary">Ready to streamline?</h2>
            <p className="text-lg text-foreground/70 mb-12 max-w-md">
              Let's discuss your current challenges and map out a practical path forward for your organization's technology.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-background border border-border flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Headquarters</h4>
                  <p className="text-foreground/70">2108 N ST STE N<br/>Sacramento, CA 95816<br/>USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-background border border-border flex items-center justify-center text-secondary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Direct Line</h4>
                  <p className="text-foreground/70">+1 (951) 551-4528</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-background border border-border flex items-center justify-center text-secondary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <p className="text-foreground/70">contact@holteksolutions.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-background border border-border p-8 md:p-12 shadow-xl shadow-black/5">
            <h3 className="text-2xl font-display font-medium mb-8">Send a message</h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-primary">Name</label>
                <Input id="name" required className="h-12 bg-transparent border-border rounded-none focus-visible:ring-secondary" data-testid="input-contact-name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
                <Input id="email" type="email" required className="h-12 bg-transparent border-border rounded-none focus-visible:ring-secondary" data-testid="input-contact-email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
                <Textarea id="message" required className="min-h-[150px] bg-transparent border-border rounded-none focus-visible:ring-secondary resize-none" data-testid="input-contact-message" />
              </div>
              <Button type="submit" size="lg" className="w-full h-14 rounded-none" data-testid="button-contact-submit">
                Send Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border bg-background text-sm text-foreground/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Holtek Solutions LLC. All rights reserved.</div>
        <div className="font-display font-medium tracking-widest text-primary/30 uppercase">Sacramento, CA</div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
