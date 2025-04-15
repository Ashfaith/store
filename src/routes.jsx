import App from "./App.jsx";
import Store from "./pages/Store.jsx";
import Home from "./pages/Home.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "store",
    element: <Store />,
  },
  {
    path: "home",
    element: <Home />,
  },
];

export default routes;
