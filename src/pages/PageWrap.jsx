import { Link } from "react-router";
import { Outlet } from "react-router";
import { Container } from "@mantine/core";

const Header = () => {
  return (
    <Container fluid>
      <div className="header">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="store">Store</Link>
        </div>
        <div>
          <Link to="cart">Cart</Link>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Header;
