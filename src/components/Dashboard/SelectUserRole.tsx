import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { useUpdateUserRoleMutation } from "@/redux/features/authApi";

// Example status array with id and value
const roleOptions = [
  { id: "1", value: "user" },
  { id: "2", value: "admin" },
];

export function SelectUserRole({
  userId,
  role,
  refetch,
}: {
  userId: string;
  role: "user" | "admin";
  refetch: () => void;
}) {
  const [selectedRole, setSelectedRole] = useState<string>(role);
  const [updateRole, { isLoading }] = useUpdateUserRoleMutation();

  const handleStatusChange = async () => {
    if (!selectedRole) return;

    const updatedData = {
      id: userId,
      selectedRole,
    };
    // console.log(updatedData);

    try {
      const res = await updateRole(updatedData).unwrap();
      // console.log(res);
      if (res.success) {
        toast.success(res.message);
        refetch();
      }
    } catch (error) {
      toast.error(error.data.message as string);
      // console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-2.5 capitalize my-4  w-28">{role}</Button>
      </DialogTrigger>
      <DialogContent className=" max-w-[380px] rounded-lg md:max-w-[625px] bg-secondary text-text">
        <DialogHeader>
          <DialogTitle>Edit User Role</DialogTitle>
          <DialogDescription>
            Select the new Role for the user from the options below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select
            value={selectedRole}
            onValueChange={(value) => setSelectedRole(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Change slot status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status Options</SelectLabel>
                {roleOptions.map((role) => (
                  <SelectItem key={role.id} value={role.value}>
                    {role.value.charAt(0).toUpperCase() + role.value.slice(1)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button
            onClick={handleStatusChange}
            className="text-white bg-primary"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
