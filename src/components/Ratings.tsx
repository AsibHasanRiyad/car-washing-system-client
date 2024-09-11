import { useGetAllRatingsQuery } from "@/redux/features/ratingApi";
import { RatingForm } from "./RatingForm";
import Title from "./shared/Title";
import RatingCard from "./RatingCard";

export type TRating = {
  rating: number;
  feedback: string;
  _id: string;
};

const Ratings = () => {
  const { data } = useGetAllRatingsQuery(undefined);
  console.log(data);
  return (
    <section className="py-10 bg-secondary ">
      <Title
        title1="Give Us"
        title2="Feedback"
        description="Share your experience by providing feedback and rating. Your input helps us improve and serve you better."
      />
      <div className="container px-6 py-12 mx-auto">
        <div className="grid justify-between grid-cols-2 gap-10 ">
          <div className="flex flex-col gap-5">
            {data?.data?.slice(0, 2).map((rating: TRating) => {
              return <RatingCard key={rating._id} rating={rating} />;
            })}
          </div>

          <div className="flex justify-end ">
            <RatingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
