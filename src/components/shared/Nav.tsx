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
      <Menubar className="justify-between hidden px-10 py-6 bg-[#212529] border-none text-[#f8f9fa] rounded-none lg:flex">
        {/* left part */}
        <div>Logo and Name</div>
        {/* middle part */}
        <div className="flex">
          <MenubarMenu>
            <MenubarTrigger>Services</MenubarTrigger>
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
            <MenubarTrigger>Bookings</MenubarTrigger>
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
            <MenubarTrigger>Slots</MenubarTrigger>
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
        {/* last part */}
        <div>
          <Button className="bg-transparent  hover:text-white hover:bg-black">
            Logout
          </Button>
        </div>
      </Menubar>

      {/* Mobile Menubar */}
      <Menubar className="flex items-center justify-between px-10 text-white bg-red-500 border-none rounded-none py-7 lg:hidden">
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
          className={`fixed inset-y-0 -left-2 top-[55px] w-2/3 space-y-4 h-full bg-black pl-8 pt-8 z-50 transition-transform duration-500 ease-in-out transform ${
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
