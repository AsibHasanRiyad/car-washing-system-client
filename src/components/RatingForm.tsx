import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "sonner";
import { useCreateRatingMutation } from "@/redux/features/ratingApi";

export function RatingForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState({ rating: false, feedback: false });
  const [createRating, { isLoading }] = useCreateRatingMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError({ rating: false, feedback: false });

    if (rating === 0 || feedback.trim() === "") {
      setError({
        rating: rating === 0,
        feedback: feedback.trim() === "",
      });
      toast.error("Please provide both a rating and feedback.");
      return;
    }

    const formData = {
      feedback: feedback,
      rating: rating,
    };

    const res = await createRating(formData);
    // console.log(res);
    if (res?.data?.success) {
      toast.success(res?.data?.message);
      setRating(0);
      setFeedback("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 lg:w-2/3">
      <div className="flex flex-col items-center justify-center">
        <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        {error.rating && (
          <p className="mt-2 text-sm text-red-500">Rating is required.</p>
        )}
      </div>

      <div>
        <label className="text-white ">Feedback</label>
        <Input
          className="mt-2 h-28"
          placeholder="Write your feedback here"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        {error.feedback && (
          <p className="mt-2 text-sm text-red-500">Feedback is required.</p>
        )}
      </div>
      <Button type="submit" className="text-gray-100 bg-primary ">
        {isLoading ? (
          <span className="flex items-center gap-2">
            <p>Submitting</p>
            <p
              className="inline-block h-4 w-4 animate-spin rounded-full border-4 text-gray-100 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
              role="status"
            ></p>
          </span>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
