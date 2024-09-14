import { useGetAllRatingsQuery } from "@/redux/features/ratingApi";
import { RatingForm } from "./RatingForm";
import Title from "./shared/Title";
import RatingCard from "./RatingCard";
import Header from "./shared/Header";
import { Button } from "./ui/button";
import { useSelector } from "react-redux"; // Assuming you're using Redux for authentication
import { useCurrentUser } from "@/redux/features/authSlice";
import { Link } from "react-router-dom";

export type TRating = {
  rating: number;
  feedback: string;
  _id: string;
};

const Ratings = () => {
  const { data } = useGetAllRatingsQuery(undefined);

  const user = useSelector(useCurrentUser);
  const isAuthenticated = !!user;
  // console.log(user);

  return (
    <section className="relative px-4 py-10 lg:px-0 bg-secondary ">
      {/* Dark overlay if no user is logged in */}
      {!isAuthenticated && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75">
          <Link to={"/signin"}>
            {" "}
            <Button className="text-white">Login</Button>
          </Link>
        </div>
      )}

      <Title
        title1="Give Us"
        title2="Feedback"
        description="Share your experience by providing feedback and rating. Your input helps us improve and serve you better."
      />
      <div
        className={`container px-6 py-12 mx-auto ${
          !isAuthenticated ? "opacity-50" : ""
        }`}
      >
        <div className="grid justify-between grid-cols-1 gap-10 lg:grid-cols-2 ">
          <div className="flex flex-col justify-between space-y-4 ">
            <Header
              title="What Others Say About Us: Genuine Experiences and Feedback"
              size="3xl"
            />
            <div className="flex flex-col gap-5">
              {data?.data?.slice(0, 2).map((rating: TRating) => {
                return <RatingCard key={rating._id} rating={rating} />;
              })}
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <Link to={"/all-reviews"}>
                {" "}
                <Button className="text-white w-fit">See all reviews</Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <RatingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
