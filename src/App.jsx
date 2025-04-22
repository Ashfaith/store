import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Wrapper from "./pages/PageWrap/PageWrap";
import Home from "./pages/Home";
import Store from "./pages/Store/Store";
import Cart from "./utils/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <MantineProvider>
      <Routes
        theme={{
          fontFamily: "Helvetica",
        }}
      >
        {/* prettier-ignore */}
        <Route path="/" element={<><Wrapper setOpen={setOpen} /><Cart open={open} setOpen={setOpen} cartItems={cartItems}/></>}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store setCartItems={setCartItems} />}/>
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
