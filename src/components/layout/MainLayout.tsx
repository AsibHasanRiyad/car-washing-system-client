import { MenubarDemo } from "../shared/Nav";
// import Navbar from "../shared/Navbar";
import Container from "../ui/Container";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container>
      {/* <Navbar /> */}
      <MenubarDemo />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
