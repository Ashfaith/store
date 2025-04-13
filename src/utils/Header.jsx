import { Link } from "react-router";
const Header = () => {
  return (
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
  );
};

export default Header;
