import ScrollToTopButton from "@/utils/ScrollToTop";
import Footer from "../shared/Footer";
import { MenubarDemo } from "../shared/Nav";
// import Navbar from "../shared/Navbar";
import Container from "../ui/Container";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className=" bg-secondary">
      <div className="sticky top-0 z-40 ">
        <MenubarDemo />
      </div>
      <Container>
        <Outlet />
      </Container>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
