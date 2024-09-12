import RatingCard from "@/components/RatingCard";
import { TRating } from "@/components/Ratings";
import Loader from "@/components/shared/Loader";
import Title from "@/components/shared/Title";
import { useGetAllRatingsQuery } from "@/redux/features/ratingApi";

const AllReviews = () => {
  const { data, isFetching, isLoading } = useGetAllRatingsQuery(undefined);
  // console.log(data);
  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className="px-4 py-10 md:px-16">
      <Title
        title1="All"
        title2="Reviews"
        description="Share your experience by providing feedback and rating. Your input helps us improve and serve you better."
      />
      <div className="grid flex-col grid-cols-2 gap-10 py-10 lg:grid-cols-3">
        {data?.data?.map((rating: TRating) => {
          return <RatingCard key={rating._id} rating={rating} />;
        })}
      </div>
    </div>
  );
};

export default AllReviews;
