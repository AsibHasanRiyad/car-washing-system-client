import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
// import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import {
  TUser,
  useCurrentToken,
  useCurrentUser,
} from "@/redux/features/authSlice";
import { ProfileDropdown } from "./Profile";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleDashboardStatus } from "@/redux/features/DashboardSlice";
import NavCountDown from "./NavCountDown";

export function MenubarDemo() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  const token = useAppSelector(useCurrentToken);
  const currentUser = useAppSelector(useCurrentUser);
  let userRole = null;
  if (token) {
    userRole = currentUser?.role as string;
  }
  // console.log(userRole);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // nav style for scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Change background based on scroll position
  const menubarBackground =
    scrollPosition > 50
      ? " transition-all transform duration-500 bg-[#6B37ED] shadow-sm shadow-violet-200 rounded-md"
      : "bg-[#171717] rounded-none";

  return (
    <div>
      {/* Desktop Menubar */}
      <Menubar
        className={`Menubar justify-between hidden px-10 py-8 ${menubarBackground} text-white   border-none  lg:flex`}
      >
        {/* left part */}
        <div className="flex items-center gap-5 text-2xl font-medium ">
          {isDashboardRoute && token && (
            <div>
              <button
                onClick={() => dispatch(toggleDashboardStatus())}
                className="p-2 m-4 text-sm text-gray-100 -ml-7 hover:bg-black/60 hover:rounded-full "
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          )}
          <Link to={"/"}>
            {" "}
            <span
              className={`${
                scrollPosition > 50 ? "text-black" : "text-primary "
              }`}
            >
              Clean
            </span>
            CarCo
          </Link>
          {/* Route part */}
          <div className="flex items-center">
            {(userRole === "user" || userRole === null) && (
              <MenubarMenu>
                <Link to={"/all-services"}>
                  <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                    Services
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            )}
            {token && (
              <MenubarMenu>
                <Link to={"/dashboard"}>
                  <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                    Dashboard
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            )}

            {userRole === "user" && (
              <MenubarMenu>
                <Link to={"/available-slot"}>
                  <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                    Available Slots
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            )}

            <MenubarMenu>
              <Link to={"/about-us"}>
                <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                  About Us
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          </div>
        </div>

        {/* last part */}

        <div>
          {token ? (
            <div className="flex items-center ">
              {userRole === "user" && (
                <div>
                  <NavCountDown />
                </div>
              )}
              <ProfileDropdown currentUser={currentUser as TUser} />
            </div>
          ) : (
            <Link to={"/signin"}>
              <Button className="text-white ">SignIn</Button>
            </Link>
          )}
        </div>
      </Menubar>

      {/* Mobile Menubar */}
      <Menubar className="flex items-center space-y-14  justify-between px-10 text-white bg-[#171717] border-none rounded-none py-7  lg:hidden">
        {/* left part */}
        {isDashboardRoute && token && (
          <div className="flex items-center text-2xl font-medium ">
            <button
              onClick={() => dispatch(toggleDashboardStatus())}
              className="p-2 m-4 text-sm text-gray-100 -ml-7 hover:bg-black/60 hover:rounded-full "
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link className="-ml-2 " to={"/"}>
              {" "}
              <span className="text-primary">Clean</span>CarCo
            </Link>
          </div>
        )}

        {/* menu button */}
        <div className="flex items-center gap-10 ">
          <div className="absolute right-14 top-1">
            {token && <ProfileDropdown currentUser={currentUser as TUser} />}
          </div>
          <div className="absolute top-2 right-2">
            <Button className="bg-primary " onClick={toggleMobileMenu}>
              {" "}
              {isMobileMenuOpen ? (
                <RxCross1 className="text-xl text-white " />
              ) : (
                <RxHamburgerMenu className="text-xl text-white " />
              )}
            </Button>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`fixed inset-y-0  -left-2 drop-shadow-xl w-2/3 md:w-2/5  h-full bg-[#171717] pl-8 pt-8 z-50 space-y-4  transition-transform duration-500 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Home */}
          <MenubarMenu>
            <Link to={"/"}>
              <MenubarTrigger className="mb-2 text-xl ">Home</MenubarTrigger>
            </Link>
          </MenubarMenu>
          {token && (
            <MenubarMenu>
              <Link to={"/dashboard"}>
                <MenubarTrigger className="mb-2 text-xl ">
                  Dashboard
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          )}

          {(userRole === "user" || userRole === null) && (
            <MenubarMenu>
              <Link to={"/all-services"}>
                <MenubarTrigger className="mb-2 text-xl font-semibold ">
                  Services
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          )}

          {userRole === "user" && (
            <MenubarMenu>
              <Link to={"/available-slot"}>
                <MenubarTrigger className="mb-2 text-xl font-semibold ">
                  Available Slots
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          )}

          {/* About Us */}
          <MenubarMenu>
            <Link to={"/about-us"}>
              <MenubarTrigger className="text-xl font-semibold ">
                About Us
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          {/* Sign In / Profile */}
          <div>
            {!token && (
              <div>
                <Link to={"/signin"}>
                  <Button className="ml-2 text-white ">SignIn</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Menubar>
    </div>
  );
}
