import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logout } from "@/redux/features/authSlice";
import { useCreateServiceMutation } from "@/redux/features/serviceApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export type TService = {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  _id?: string;
};

export function CreateService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TService>();
  const [createService, { error, isLoading }] = useCreateServiceMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (error?.data?.message === "jwt expired") {
    dispatch(logout());
    navigate("/signin");
  }
  const onSubmit: SubmitHandler<TService> = async (data) => {
    try {
      data.isDeleted = false;
      const res = await createService(data).unwrap();
      // console.log(res, "res");
      if (res.success) {
        toast.success(res.message);
      }
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className=" w-[350px] md:w-[550px] bg-black bg-opacity-10 backdrop-blur-lg shadow-xl border border-white border-opacity-30">
          <CardHeader>
            <CardTitle className="my-3 text-center text-primary">
              Create a Service
            </CardTitle>
            <CardDescription className=" text-neutral-400">
              Create a comprehensive service offering for CleanCarCo, tailored
              to provide exceptional car care solutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-4">
                <Label className="text-white" htmlFor="name">
                  Service Name :
                </Label>
                <Input
                  {...register("name", {
                    required: "Service name is required",
                  })}
                  type="text"
                  id="name"
                  placeholder="Name of your service"
                  className={`${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-4">
                <Label className="text-white" htmlFor="description">
                  Description :
                </Label>
                <Input
                  type="text"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  id="description"
                  placeholder="Description"
                  className={`${errors.description ? "border-red-500" : ""}`}
                />
                {errors.description && (
                  <span className="text-sm text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-4">
                <Label className="text-white" htmlFor="price">
                  Price
                </Label>
                <Input
                  {...register("price", {
                    required: "Price is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  id="price"
                  placeholder="Price"
                  className={`${errors.price ? "border-red-500" : ""}`}
                />
                {errors.price && (
                  <span className="text-sm text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-4">
                <Label className="text-white" htmlFor="duration">
                  Duration (minutes)
                </Label>
                <Input
                  type="number"
                  {...register("duration", {
                    required: "Duration is required",
                    valueAsNumber: true,
                  })}
                  id="duration"
                  placeholder="Duration"
                  className={`${errors.duration ? "border-red-500" : ""}`}
                />
                {errors.duration && (
                  <span className="text-sm text-red-500">
                    {errors.duration.message}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end w-full">
            <Button className="text-gray-100 bg-primary ">
              {isLoading ? (
                <span className="flex items-center gap-2 ">
                  <p>Creating</p>
                  <p
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                    role="status"
                  ></p>
                </span>
              ) : (
                "Create"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
