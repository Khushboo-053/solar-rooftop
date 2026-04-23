import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToHash from "@/components/ScrollToHash";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Subsidies from "./pages/Subsidies.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Blogs from "./pages/Blogs.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import AdminLogin from "./pages/admin/Login.tsx";
import AdminDashboard from "./pages/admin/Dashboard.tsx";
import Solutions from "./pages/Solutions.tsx";
import Calculator from "./pages/Calculator.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/best-solar-company-kashmir" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subsidies" element={<Subsidies />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Navigate to="/admin/dashboard/blogs" replace />} />
          <Route path="/admin/dashboard/blogs" element={<AdminDashboard section="blogs" />} />
          <Route path="/admin/dashboard/leads" element={<AdminDashboard section="leads" />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
