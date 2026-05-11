import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import logoSrc from "@assets/Logo_holtek_1778517293916.png";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-28 py-16">
        <img
          src={logoSrc}
          alt="Holtek Solutions LLC"
          className="mb-14 w-56 md:w-72"
          data-testid="img-logo"
        />
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.05] tracking-tight mb-8 uppercase text-primary"
          data-testid="heading-main"
        >
          Technology solutions<br />
          <span className="text-[hsl(204,100%,44%)]">that simplify operations.</span>
        </h1>
        <p
          className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed font-sans"
          data-testid="text-mission"
        >
          Helping organizations improve workflows, manage systems, and support day-to-day business operations.
        </p>
      </main>

      <footer className="bg-[hsl(234,38%,16%)] text-white font-sans" data-testid="footer">
        <div className="px-8 md:px-16 lg:px-28 py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div data-testid="footer-address">
            <div className="text-xs font-semibold tracking-widest uppercase text-[hsl(204,100%,44%)] mb-2">Address</div>
            <div className="text-white/80 leading-relaxed text-sm">
              Holtek Solutions LLC<br />
              2108 N ST STE N<br />
              Sacramento, CA 95816, USA
            </div>
          </div>
          <div data-testid="footer-phone">
            <div className="text-xs font-semibold tracking-widest uppercase text-[hsl(204,100%,44%)] mb-2">Phone</div>
            <a
              href="tel:+19515514528"
              className="text-white/80 hover:text-[hsl(204,100%,44%)] transition-colors text-sm"
              data-testid="link-phone"
            >
              +1 (951) 551-4528
            </a>
          </div>
          <div className="sm:text-right text-white/30 text-xs self-end">
            &copy; {new Date().getFullYear()} Holtek Solutions LLC
          </div>
        </div>
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
