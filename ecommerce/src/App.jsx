import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Navbar from "./Layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
