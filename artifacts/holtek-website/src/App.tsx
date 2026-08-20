import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

const purple = "#7104D2";

function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col">
      <main className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-display font-black uppercase leading-[0.95] tracking-tight mb-10"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", color: purple }}
            data-testid="heading-main"
          >
            Technology<br />
            solutions<br />
            <span className="text-foreground">that simplify</span><br />
            <span className="text-foreground">operations.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-start gap-4 max-w-3xl"
        >
          <div
            className="w-1 shrink-0 rounded-full mt-1"
            style={{ minHeight: "4rem", background: purple }}
          />
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-sans font-light leading-snug text-foreground/65"
            data-testid="text-mission"
          >
            Helping organizations improve workflows, manage systems, and support day-to-day business operations.
          </p>
        </motion.div>

      </main>

      <motion.footer
        className="text-white font-sans"
        style={{ background: purple }}
        data-testid="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="px-8 md:px-16 lg:px-32 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="flex flex-col sm:flex-row gap-10">
            <div data-testid="footer-address">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2 text-white/50">Address</div>
              <div className="text-white/85 leading-relaxed text-sm">
                Holtek Solutions LLC<br />
                2108 N ST STE N<br />
                Sacramento, CA 95816, USA
              </div>
            </div>
            <div data-testid="footer-phone">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2 text-white/50">Phone</div>
              <a
                href="tel:+19515514528"
                className="text-white/85 text-sm transition-colors hover:text-white"
                data-testid="link-phone"
              >
                +1 (951) 551-4528
              </a>
            </div>
            <div data-testid="footer-email">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2 text-white/50">Email</div>
              <a
                href="mailto:teki@holteksolutions.com"
                className="text-white/85 text-sm transition-colors hover:text-white"
                data-testid="link-email"
              >
                teki@holteksolutions.com
              </a>
            </div>
          </div>
          <div className="text-white/30 text-xs sm:text-right">
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
