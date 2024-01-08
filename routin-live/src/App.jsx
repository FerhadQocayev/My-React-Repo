import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";
import AboutPage from "./pages/about-page/about";
import HomePage from "./pages/home-page/home";
import ProductsPage from "./pages/products-page/products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
