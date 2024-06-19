import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/companent/Header/header";
import Footer from "./assets/companent/Footer/Footer";
import Home from "./assets/pages/Home/home.component";
import Blog from "./assets/pages/Blog/blog.component";
import About from "./assets/pages/About/blog.component";
import Pricing from "./assets/pages/Pricing/pricing.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Service from "./assets/pages/Service/service.component";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
