import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
// import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
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

export function MenubarDemo() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current route

  // Check if the current route is /dashboard or any of its children
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  const token = useAppSelector(useCurrentToken);
  const currentUser = useAppSelector(useCurrentUser);
  let userRole = null;
  if (token) {
    userRole = currentUser?.role as string;
  }
  console.log(userRole);
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
        <div className="flex items-center text-2xl font-medium ">
          {/* {isDashboardRoute && ( */}
          <div>
            <button
              onClick={() => dispatch(toggleDashboardStatus())}
              className="p-2 m-4 text-sm text-gray-100 -ml-7 hover:bg-black/60 hover:rounded-full "
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
          {/* )} */}
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
        </div>
        {/* middle part */}
        <div className="flex items-center">
          {/* home */}
          <MenubarMenu>
            <Link to={"/"}>
              <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                Home
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          {/* services */}
          {userRole === "admin" && (
            <MenubarMenu>
              <MenubarTrigger className="text-lg text-white transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105 ">
                Services
              </MenubarTrigger>
              <MenubarContent className="mt-1 text-white border-none bg-primary">
                <MenubarItem>
                  <Link to={"/all-services"}>All Services</Link>
                  <MenubarShortcut>
                    <MdKeyboardArrowRight className="text-xl text-white" />
                  </MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <Link to={"/create-service"}>Create Services</Link>
                  <MenubarShortcut>
                    <MdKeyboardArrowRight className="text-xl text-white" />
                  </MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          )}
          {(userRole === "user" || userRole === null) && (
            <MenubarMenu>
              <Link to={"/all-services"}>
                <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                  Services
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          )}
          {(userRole === "user" || userRole === "admin") && (
            <MenubarMenu>
              <Link to={"/dashboard"}>
                <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                  Dashboard
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          )}
          {/* Bookings */}
          {userRole === "admin" && (
            <MenubarMenu>
              <Link to={"/all-bookings"}>
                <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                  All Bookings
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          )}
          {userRole === "user" && (
            <MenubarMenu>
              <Link to={"/my-bookings"}>
                <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                  My Bookings
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          )}
          {/* slots */}
          {userRole === "admin" && (
            <MenubarMenu>
              <MenubarTrigger className="text-lg transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                Slots
              </MenubarTrigger>
              <MenubarContent className="mt-1 text-white border-none bg-primary ">
                <Link to={"/available-slot"}>
                  <MenubarItem>
                    Available Slots
                    <MenubarShortcut>
                      <MdKeyboardArrowRight className="text-xl text-white" />
                    </MenubarShortcut>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link to="/create-slot">
                  <MenubarItem>
                    Create Slot
                    <MenubarShortcut>
                      <MdKeyboardArrowRight className="text-xl text-white" />
                    </MenubarShortcut>
                  </MenubarItem>
                </Link>
              </MenubarContent>
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
        {/* last part */}

        <div>
          {token ? (
            <ProfileDropdown currentUser={currentUser as TUser} />
          ) : (
            <Link to={"/signin"}>
              <Button className="text-white ">SignIn</Button>
            </Link>
          )}
        </div>
      </Menubar>

      {/* Mobile Menubar */}
      <Menubar className="flex items-center justify-between px-10 text-white bg-[#171717] border-none rounded-none py-7 lg:hidden">
        {/* left part */}
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
        {/* menu button */}
        <div className="flex items-center gap-10 ">
          <div className="absolute right-14 top-1">
            {token && <ProfileDropdown currentUser={currentUser as TUser} />}
          </div>
          <div className="absolute right-2">
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
          className={`fixed inset-y-0 -left-2 drop-shadow-xl w-2/3 md:w-2/5  h-full bg-[#171717] pl-8 pt-8 z-50 space-y-4  transition-transform duration-500 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Home */}
          <MenubarMenu>
            <Link to={"/"}>
              <MenubarTrigger className="text-xl ">Home</MenubarTrigger>
            </Link>
          </MenubarMenu>

          {/* Services */}
          <div>
            {userRole === "admin" && (
              <MenubarMenu>
                <MenubarTrigger className="text-xl ">Services</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to={"/all-services"}>All Services</Link>
                    <MenubarShortcut>
                      <MdKeyboardArrowRight className="text-xl text-white" />
                    </MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link to={"/create-service"}>Create Services</Link>
                    <MenubarShortcut>
                      <MdKeyboardArrowRight className="text-xl text-white" />
                    </MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            )}
          </div>
          <div>
            {(userRole === "user" || userRole === null) && (
              <MenubarMenu>
                <Link to={"/all-services"}>
                  <MenubarTrigger className="text-xl font-semibold ">
                    Services
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            )}
          </div>

          {/* Bookings */}
          <div>
            {userRole === "admin" && (
              <MenubarMenu>
                <Link to={"/all-bookings"}>
                  <MenubarTrigger className="text-xl font-semibold ">
                    All Bookings
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            )}
          </div>
          <div>
            {userRole === "user" && (
              <MenubarMenu>
                <Link to={"/my-bookings"}>
                  <MenubarTrigger className="text-xl font-semibold ">
                    My Bookings
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            )}
          </div>

          {/* Slots */}
          <div>
            {userRole === "admin" && (
              <MenubarMenu>
                <MenubarTrigger className="text-xl ">Slots</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to={"/available-slot"}>Available Slots</Link>
                    <MenubarShortcut>
                      <MdKeyboardArrowRight className="text-xl text-white" />
                    </MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link to={"/create-slot"}>Create Slot</Link>
                    <MenubarShortcut>
                      <MdKeyboardArrowRight className="text-xl text-white" />
                    </MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            )}
          </div>
          <div>
            {userRole === "user" && (
              <MenubarMenu>
                <Link to={"/available-slot"}>
                  <MenubarTrigger className="text-xl font-semibold ">
                    Available Slots
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            )}
          </div>

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
