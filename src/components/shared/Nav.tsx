import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout, useCurrentToken } from "@/redux/features/authSlice";

export function MenubarDemo() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handelLogout = () => {
    dispatch(logout());
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
          <MenubarMenu>
            <MenubarTrigger className="text-lg transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105 ">
              Bookings
            </MenubarTrigger>
            <MenubarContent className="mt-1 bg-primary">
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
          <MenubarMenu>
            <Link to={"/about-us"}>
              <h1 className="ml-1 text-lg font-semibold transition-all transform cursor-pointer duration-15000 hover:text-primary hover:scale-105">
                About Us
              </h1>
            </Link>
          </MenubarMenu>
        </div>
        {/* last part */}
        <div>
          {token ? (
            <Button
              onClick={() => handelLogout()}
              className="bg-[#ff0] text-black transform transition-colors duration-500  hover:text-white hover:bg-black"
            >
              Logout
            </Button>
          ) : (
            <Link to={"/signin"}>
              <Button
                variant="expandIcon"
                Icon={FaArrowRightLong}
                iconPlacement="right"
                className="text-black "
              >
                SignIn
              </Button>
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

        {/* Sidebar Menu */}
        <div
          className={`fixed inset-y-0 -left-2 drop-shadow-xl  w-2/3 md:w-2/5 space-y-4 h-full bg-[#171717] pl-8 pt-8 z-50 transition-transform duration-500 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
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
            <div className="ml-2.5">
              {token ? (
                <Button
                  onClick={() => handelLogout()}
                  className="bg-[#ff0] text-black transform transition-colors duration-500  hover:text-white hover:bg-black"
                >
                  Logout
                </Button>
              ) : (
                <Link to={"/signin"}>
                  <Button
                    variant="expandIcon"
                    Icon={FaArrowRightLong}
                    iconPlacement="right"
                    className="text-black "
                  >
                    SignIn
                  </Button>
                </Link>
              )}
            </div>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  );
}
