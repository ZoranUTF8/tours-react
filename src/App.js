import "./App.css";
import { NavbarComponent, Footer } from "./Components";
import { Routes, Route } from "react-router-dom";
import { Error, Landing } from "./Pages";
import { Register } from "./Components";

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <NavbarComponent />

      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* FOOTER */}

      <Footer />
    </div>
  );
}

export default App;
