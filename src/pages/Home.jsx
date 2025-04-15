import { Link } from "react-router";

function Home() {
  return (
    <>
      <p>This is the home / landing page</p>
      <Link to="/store">Checkout store</Link>
    </>
  );
}

export default Home;
