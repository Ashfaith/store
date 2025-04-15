import { Link } from "react-router";
import { Outlet } from "react-router";
const Header = () => {
  return (
    <div className="body">
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
    </div>
  );
};

export default Header;
