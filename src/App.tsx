import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import TechStackPage from "@/pages/tech_stack";
import PricingPage from "@/pages/pricing";
import GalleryPage from "@/pages/gallery";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TechStackPage />} path="/tech_stack" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<GalleryPage />} path="/gallery" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
