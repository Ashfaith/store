import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="store" element={<Store />} />
      </Route>
    </Routes>
  );
}

export default App;
