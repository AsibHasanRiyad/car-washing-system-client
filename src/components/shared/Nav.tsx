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

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import {
  TUser,
  useCurrentToken,
  useCurrentUser,
} from "@/redux/features/authSlice";
import { ProfileDropdown } from "./Profile";

export function MenubarDemo() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <div>
      {/* Desktop Menubar */}
      <Menubar className="justify-between hidden px-10 py-7 bg-[#171717]  text-white rounded-none border-gray-400 lg:flex">
        {/* left part */}
        <div className="text-2xl font-medium ">
          <Link to={"/"}>
            {" "}
            <span className=" text-[#ff0]">Clean</span>CarCo
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
              <MenubarTrigger className="text-lg transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105 ">
                Services
              </MenubarTrigger>
              <MenubarContent className="mt-1 bg-primary">
                <MenubarItem>
                  <Link to={"/all-services"}>All Services</Link>
                  <MenubarShortcut>
                    <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                  </MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <Link to={"/create-service"}>Create Services</Link>
                  <MenubarShortcut>
                    <MdKeyboardArrowRight className="text-[#171717] text-xl" />
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
              <MenubarContent className="mt-1 bg-primary ">
                <MenubarItem>
                  <Link to={"/available-slot"}> Available Slots</Link>
                  <MenubarShortcut>
                    <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                  </MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <Link to="/create-slot"> Create Slot </Link>
                  <MenubarShortcut>
                    <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                  </MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          )}
          {(userRole === "user" || userRole === null) && (
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
              <Button className="text-black ">SignIn</Button>
            </Link>
          )}
        </div>
      </Menubar>

      {/* Mobile Menubar */}
      <Menubar className="flex items-center justify-between px-10 text-white bg-[#171717] border-none rounded-none py-7 lg:hidden">
        {/* left part */}
        <div className="text-2xl font-medium ">
          <Link to={"/"}>
            {" "}
            <span className=" text-[#ff0]">Clean</span>CarCo
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
                <RxCross1 className="text-xl text-black " />
              ) : (
                <RxHamburgerMenu className="text-xl text-black " />
              )}
            </Button>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`fixed inset-y-0 -left-2 drop-shadow-xl  w-2/3 md:w-2/5 space-y-4 h-full bg-[#171717] pl-8 pt-8 z-50 transition-transform duration-500 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <MenubarMenu>
            <Link to={"/"}>
              <MenubarTrigger className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                Home
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-lg ">Services</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link to={"/all-services"}>All Services</Link>
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link to={"/create-service"}>Create Services</Link>
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-lg ">Bookings</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Get All Bookings
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Create Bookings
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-lg ">Slots</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Get All Slots
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link to="/create-slot"> Create Slot </Link>
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
            <div>
              {!token && (
                <Link to={"/signin"}>
                  <Button className="ml-2 text-black ">SignIn</Button>
                </Link>
              )}
            </div>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  );
}
