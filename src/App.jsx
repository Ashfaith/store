import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Header from "./pages/PageWrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./utils/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <MantineProvider>
      <Routes>
        {/* prettier-ignore */}
        <Route path="/" element={<><Header /><Cart cartItems={cartItems}/></>}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store setCartItems={setCartItems} />}/>
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
