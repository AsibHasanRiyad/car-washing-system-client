import { MessageSquare } from "lucide-react";
import { TRating } from "./Ratings";
import { Rating } from "@smastrom/react-rating";

const RatingCard = ({ rating }: { rating: TRating }) => {
  return (
    <div className="text-white ">
      <div className="space-y-1">
        <p className="flex gap-2 ">
          {" "}
          <MessageSquare className="text-justify  min-w-7 min-h-7" />{" "}
          {rating.feedback}
        </p>
        <Rating style={{ maxWidth: 150 }} isDisabled value={rating.rating} />
      </div>
    </div>
  );
};

export default RatingCard;
