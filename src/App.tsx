import { BrowserRouter } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import AppRoutes from "./routes/AppRoutes";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
