import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/alg1">alg1</NavLink>
      <NavLink to="/alg2">alg2</NavLink>
      <NavLink to="/alg3">alg3</NavLink>
    </nav>
  );
};

export default Menu;