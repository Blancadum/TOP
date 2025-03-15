import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/ContactPage";
import Blog from "./pages/Blog";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Tarifas from "./pages/Tarifas";
import Servicios from "./pages/Servicios";
import VideosPage from "./pages/videoteca";
import NotFound from "./pages/NotFound";

// Rutas del blog (trastornos)
import Ansiedad from "./pages/blog/trastornos/ansiedad";
import DepresionPost from "./pages/blog/trastornos/depresion";
import Estres from "./pages/blog/trastornos/estres";
import Fobias from "./pages/blog/trastornos/fobias";
import ProblemasEmocionales from "./pages/blog/trastornos/problemas-emocionales";
import TCA from "./pages/blog/trastornos/tca";

// Rutas de administración
import Usuarios from "./pages/admin/Usuarios";

// Rutas de servicios específicos
import CoachingBariatrico from "./pages/servicios/coaching-bariatrico";
import EnfoqueHolistico from "./pages/servicios/enfoque-holistico";
import OrientacionEscolar from "./pages/servicios/orientacion-escolar";
import TerapiaFamiliar from "./pages/servicios/terapia-familiar";
import TerapiaIndividual from "./pages/servicios/terapia-individual";
import TerapiaInfantil from "./pages/servicios/terapia-infantil";
import TerapiaOnline from "./pages/servicios/terapia-online";
import TerapiaPareja from "./pages/servicios/terapia-pareja";

// Importar el Layout
import Layout from "./components/PageLayout";

function App() {
  return (
    <Routes>
      {/* Envolviendo todas las rutas con Layout */}
      
      {/* Rutas principales */}
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tarifas" element={<Tarifas />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/videoteca" element={<VideosPage />} />

      {/* Rutas del blog sobre trastornos */}
      <Route path="/blog/trastornos/ansiedad" element={<Ansiedad />} />
      <Route path="/blog/trastornos/depresion" element={<DepresionPost />} />
      <Route path="/blog/trastornos/estres" element={<Estres />} />
      <Route path="/blog/trastornos/fobias" element={<Fobias />} />
      <Route path="/blog/trastornos/problemas-emocionales" element={<ProblemasEmocionales />} />
      <Route path="/blog/trastornos/tca" element={<TCA />} />

      {/* Ruta de administración (considerar autenticación) */}
      <Route path="/admin/usuarios" element={<Usuarios />} />

      {/* Rutas de servicios específicos */}
      <Route path="/servicios/coaching-bariatrico" element={<CoachingBariatrico />} />
      <Route path="/servicios/enfoque-holistico" element={<EnfoqueHolistico />} />
      <Route path="/servicios/orientacion-escolar" element={<OrientacionEscolar />} />
      <Route path="/servicios/terapia-familiar" element={<TerapiaFamiliar />} />
      <Route path="/servicios/terapia-individual" element={<TerapiaIndividual />} />
      <Route path="/servicios/terapia-infantil" element={<TerapiaInfantil />} />
      <Route path="/servicios/terapia-online" element={<TerapiaOnline />} />
      <Route path="/servicios/terapia-pareja" element={<TerapiaPareja />} />

      {/* Ruta para páginas no encontradas */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

export default App;
