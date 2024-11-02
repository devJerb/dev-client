import { displayUserDetails } from "./data/address";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 100,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  displayUserDetails();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
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
