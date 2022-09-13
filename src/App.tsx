import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, Shop } from "./pages";
import { Footer, Navbar } from "./widgets";
const App = () => {
  useEffect(() => {
    window.document.title = "Shoppe";
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <div className="flex-grow" />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
