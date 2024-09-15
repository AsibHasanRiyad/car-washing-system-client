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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateUserProfileMutation } from "@/redux/features/authApi";
import {
  getAllUserData,
  setUser,
  userCurrentUserDetails,
} from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Edit } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export type TUser = {
  name: string;
  phone: string;
  address: number;
  _id?: string;
};

export function EditUserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>();
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const [isOpen, setIsOpen] = useState(false);
  const userDetails = useAppSelector(userCurrentUserDetails);
  const authState = useAppSelector(getAllUserData);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<TUser> = async (data) => {
    data._id = userDetails?.id;
    try {
      const res = await updateUserProfile(data).unwrap();
      // console.log(res, "response");
      if (res.success) {
        // update user details on local storage
        dispatch(
          setUser({
            user: authState.user,
            token: authState.token,
            userId: authState.userId,
            userName: res.data.name,
            userDetails: {
              userName: res.data.name,
              address: res.data.address,
              phone: res.data.phone,
              email: authState.userDetails?.email,
              role: authState.userDetails?.role,
              id: authState.userDetails?.id,
            },
          })
        );
        setIsOpen(false);
        toast.success(res.message);
      }
    } catch (err) {
      console.log(err, "error");
      toast.error((err as any)?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-10 h-10 p-0 rounded-full ">
          <Edit className="w-4 h-4 text-white " />
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-[350px] md:max-w-[550px]  lg:max-w-[625px] bg-secondary   border border-white border-opacity-30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-primary">
            Update Profile
          </DialogTitle>
          <DialogDescription className=" text-neutral-400">
            Update your user profile to ensure your information is current and
            accurate.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid items-center w-full gap-4 py-4">
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="name">
                Name :
              </Label>
              <Input
                {...register("name", {
                  required: " Name is required",
                })}
                defaultValue={userDetails?.userName}
                type="text"
                id="name"
                placeholder="Name"
                className={`${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="address">
                Address
              </Label>
              <Input
                defaultValue={userDetails?.address}
                {...register("address", {
                  required: "Address is required",
                })}
                type="string"
                id="address"
                placeholder="Address"
                className={`${errors.address ? "border-red-500" : ""}`}
              />
              {errors.address && (
                <span className="text-sm text-red-500">
                  {errors.address.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Label className="text-white" htmlFor="phone">
                Phone
              </Label>
              <Input
                type="string"
                defaultValue={userDetails?.phone}
                {...register("phone", {
                  required: "Phone is required",
                  valueAsNumber: true,
                })}
                id="phone"
                placeholder="Phone"
                className={`${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && (
                <span className="text-sm text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
          <DialogFooter className="flex justify-end w-full">
            <Button type="submit" className="text-gray-100 bg-primary ">
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <p>Updating</p>
                  <p className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "></p>
                </span>
              ) : (
                "Update"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
