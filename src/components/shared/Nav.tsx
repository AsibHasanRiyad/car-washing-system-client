import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import { useState } from "react";

export function MenubarDemo() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Desktop Menubar */}
      <Menubar className="justify-between hidden px-10 py-7 bg-[#171717]  border-none   text-white rounded-none border-gray-400 lg:flex">
        {/* left part */}
        <div className="text-2xl font-medium ">
          <span className=" text-[#ff0]">Clean</span>CarCo
        </div>
        {/* middle part */}
        <div className="flex">
          <MenubarMenu>
            <MenubarTrigger className="text-lg ">Services</MenubarTrigger>
            <MenubarContent className="mt-1 bg-primary">
              <MenubarItem>
                Get All Services
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Create Services
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-lg ">Bookings</MenubarTrigger>
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
            <MenubarTrigger className="text-lg ">Slots</MenubarTrigger>
            <MenubarContent className="mt-1 bg-primary ">
              <MenubarItem>
                Get All Slots
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Create Slot
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
        {/* last part */}
        <div>
          <Button className="bg-[#ff0] text-black transform transition-colors duration-500  hover:text-white hover:bg-black">
            Logout
          </Button>
        </div>
      </Menubar>

      {/* Mobile Menubar */}
      <Menubar className="flex items-center justify-between px-10 text-white bg-[#171717] border-none rounded-none py-7 lg:hidden">
        {/* left part */}
        <div>Logo and Name</div>
        {/* menu button */}
        <div className="absolute right-2">
          <Button className="bg-transparent " onClick={toggleMobileMenu}>
            {" "}
            <RxHamburgerMenu className="text-xl " />{" "}
          </Button>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`fixed inset-y-0 -left-2 drop-shadow-xl  w-2/3 space-y-4 h-full bg-[#171717] pl-8 pt-8 z-50 transition-transform duration-500 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <MenubarMenu>
            <MenubarTrigger className="text-lg ">Services</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Get All Services
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Create Services
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
                Create Slot
                <MenubarShortcut>
                  <MdKeyboardArrowRight className="text-[#171717] text-xl" />
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  );
}
