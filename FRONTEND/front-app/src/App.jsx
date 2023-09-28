import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Components/LoginPage";
import { RegisterPage } from "./Components/RegisterPage";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="app">
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
