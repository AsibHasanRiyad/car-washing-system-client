import { useGetSingleServiceQuery } from "@/redux/features/serviceApi";
import { useParams } from "react-router-dom";

const SingleServices = () => {
  const { id } = useParams();
  const { data } = useGetSingleServiceQuery(id);
  console.log(data, "single services");
  console.log(id);
  return <div></div>;
};

export default SingleServices;
