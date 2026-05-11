import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import logoSrc from "@assets/Logo_holtek_1778517293916.png";

const queryClient = new QueryClient();

const blue = "hsl(204,100%,44%)";
const navy = "hsl(234,38%,16%)";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">

        <motion.img
          src={logoSrc}
          alt="Holtek Solutions LLC"
          className="mb-16 w-36 md:w-48 lg:w-56"
          data-testid="img-logo"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-display font-black uppercase leading-[0.95] tracking-tight mb-10 text-primary"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            data-testid="heading-main"
          >
            Technology<br />
            solutions<br />
            <span style={{ color: blue }}>that simplify</span><br />
            <span style={{ color: blue }}>operations.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-start gap-4 max-w-3xl"
        >
          <div
            className="w-1 shrink-0 rounded-full mt-1"
            style={{ height: "100%", minHeight: "4rem", background: blue }}
          />
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-sans font-light leading-snug text-foreground/75"
            data-testid="text-mission"
          >
            Helping organizations improve workflows, manage systems, and support day-to-day business operations.
          </p>
        </motion.div>

      </main>

      <motion.footer
        className="text-white font-sans"
        style={{ background: navy }}
        data-testid="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="px-8 md:px-16 lg:px-32 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="flex flex-col sm:flex-row gap-10">
            <div data-testid="footer-address">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: blue }}>Address</div>
              <div className="text-white/75 leading-relaxed text-sm">
                Holtek Solutions LLC<br />
                2108 N ST STE N<br />
                Sacramento, CA 95816, USA
              </div>
            </div>
            <div data-testid="footer-phone">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: blue }}>Phone</div>
              <a
                href="tel:+19515514528"
                className="text-white/75 text-sm transition-colors hover:text-white"
                data-testid="link-phone"
              >
                +1 (951) 551-4528
              </a>
            </div>
          </div>
          <div className="text-white/25 text-xs sm:text-right">
            &copy; {new Date().getFullYear()} Holtek Solutions LLC
          </div>
        </div>
      </motion.footer>
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
