import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import logoSrc from "@assets/Logo_holtek_1778517293916.png";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center px-8 md:px-16 lg:px-28">
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
        Systems that work.<br />
        <span className="text-[hsl(204,100%,44%)]">Business that flows.</span>
      </h1>
      <p
        className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed font-sans mb-12"
        data-testid="text-mission"
      >
        Practical technology, cloud, IT, and business process solutions for organizations, nonprofits, and growing businesses. We help clients streamline operations, improve workflows, and implement reliable digital systems.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 font-sans" data-testid="section-contact-info">
        <div data-testid="text-address">
          <div className="text-xs font-semibold tracking-widest uppercase text-[hsl(204,100%,44%)] mb-1">Address</div>
          <div className="text-foreground/80 leading-snug">
            Holtek Solutions LLC<br />
            2108 N ST STE N<br />
            Sacramento, CA 95816, USA
          </div>
        </div>
        <div data-testid="text-phone">
          <div className="text-xs font-semibold tracking-widest uppercase text-[hsl(204,100%,44%)] mb-1">Phone</div>
          <a
            href="tel:+19515514528"
            className="text-foreground/80 hover:text-[hsl(204,100%,44%)] transition-colors"
            data-testid="link-phone"
          >
            +1 (951) 551-4528
          </a>
        </div>
      </div>
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
