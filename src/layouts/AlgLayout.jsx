import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const AlgLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default AlgLayout;