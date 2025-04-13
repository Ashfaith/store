import { Link } from "react-router-dom";
import "./App.css";
import { useParams } from "react-router-dom";
import Header from "./utils/Header";

function App() {
  return (
    <>
      <Header />
      <p>This is the home / landing page</p>
      <Link to="/store">Checkout store</Link>
    </>
  );
}

export default App;
