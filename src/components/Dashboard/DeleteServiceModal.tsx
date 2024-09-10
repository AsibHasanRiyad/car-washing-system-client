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
import { useDeleteServiceMutation } from "@/redux/features/serviceApi";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export interface DeleteServiceProps {
  id: string;
  refetch: () => void;
}

export function DeleteService({ id, refetch }: DeleteServiceProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteService, { isLoading }] = useDeleteServiceMutation();

  const handleDelete = async (serviceId: string) => {
    try {
      setIsSubmitting(true);
      const res = await deleteService(serviceId);
      console.log(res, "Service deleted");
      console.log(res?.data?.success);
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setOpen(false);
        refetch();
      }
    } catch (error) {
      console.error("Failed to delete service:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-primary "
          onClick={() => setOpen(true)}
        >
          <Trash />
          Delete
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Service</DialogTitle>
          <DialogDescription>
            Click confirm to delete this service.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={() => handleDelete(id)}
            disabled={isLoading || isSubmitting}
            type="submit"
            className="text-white "
          >
            {isSubmitting ? "Deleting..." : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
