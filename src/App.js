import { Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import "./App.css";
import PaystackIntegration from "./components/PaystackIntegration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/checkout" element={<PaystackIntegration />} />
    </Routes>
  );
}

export default App;
