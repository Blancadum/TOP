import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/AboutMe";
import RegisterPage from "./pages/Registro";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<About />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
