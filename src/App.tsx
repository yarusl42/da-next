import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExampleProject from "./pages/project/ExampleProject";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import WebDesign from "./pages/services/WebDesign";
import SEOPage from "./pages/services/SEO";
import LeadGeneration from "./pages/services/LeadGeneration";
import WebsiteCare from "./pages/services/WebsiteCare";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/example-project" element={<ExampleProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/lead-generation" element={<LeadGeneration />} />
          <Route path="/services/website-care" element={<WebsiteCare />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
