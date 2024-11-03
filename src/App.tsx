import { Routes, Route } from "react-router-dom";
import { displayUserDetails } from "./data/address";

import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import PageLayout from "./components/ui/PageLayout";

const App = () => {
  displayUserDetails();
  return (
    <div className="bg-[#e0e0e0]">
      <PageLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </PageLayout>
    </div>
  );
};

export default App;
