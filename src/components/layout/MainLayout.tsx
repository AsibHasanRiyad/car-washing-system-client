import Footer from "../shared/Footer";
import { MenubarDemo } from "../shared/Nav";
// import Navbar from "../shared/Navbar";
import Container from "../ui/Container";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <MenubarDemo />

      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
