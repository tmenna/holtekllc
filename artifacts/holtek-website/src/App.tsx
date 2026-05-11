import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.05] tracking-tight mb-8 text-primary"
          data-testid="heading-main"
        >
          Systems that work.<br />
          <span className="text-muted-foreground/60">Business that flows.</span>
        </h1>
        <p
          className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
          data-testid="text-mission"
        >
          Practical technology, cloud, IT, and business process solutions for organizations, nonprofits, and growing businesses. We help clients streamline operations, improve workflows, and implement reliable digital systems.
        </p>
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
