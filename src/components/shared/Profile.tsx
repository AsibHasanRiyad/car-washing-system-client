import { CreditCard, LogOut, User, CircleUserRound, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout, TUser, useCurrentUserName } from "@/redux/features/authSlice";

export function ProfileDropdown({ currentUser }: { currentUser: TUser }) {
  console.log(currentUser);
  const userName = useAppSelector(useCurrentUserName);
  const handelLogout = () => {
    dispatch(logout());
  };
  const dispatch = useAppDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="justify-center mt-1 bg-transparent hover:bg-transparent ">
          <CircleUserRound className="w-12 h-12 p-1 rounded-full lg:w-10 lg:h-10 hover:bg-neutral-700" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 ml-3 mr-3 lg:mr-7">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="w-4 h-4 mr-2" />
            <span className="">{userName}</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail className="w-4 h-4 mr-2" />
            <span className="">{currentUser?.email}</span>
            <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="w-4 h-4 mr-2" />
            <span className="uppercase ">{currentUser?.role}</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer "
          onClick={() => handelLogout()}
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
