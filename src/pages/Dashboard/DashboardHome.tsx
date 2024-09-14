import AdminStats from "@/components/AdminStats";
import { EditUserProfile } from "@/components/EditProfileModal";
import Title from "@/components/shared/Title";

import { userCurrentUserDetails } from "@/redux/features/authSlice";

import { useAppSelector } from "@/redux/hook";
import { Contact, Home, Mail, User, UserCircle } from "lucide-react";

const DashboardHome = () => {
  const data = useAppSelector(userCurrentUserDetails);

  return (
    <div>
      <Title
        title1="User"
        title2="Profile"
        description="Share your experience by providing feedback and rating. Your input helps us improve and serve you better."
      />
      <div className="container p-5 mx-auto my-5">
        <div className="flex flex-col gap-5 lg:flex-row no-wrap ">
          <div className="w-full lg:w-3/12 ">
            {/* main profile */}

            <div className="h-full py-10 border cursor-pointer text-text bg-third border-neutral-800 rounded-xl">
              <div className="flex flex-col items-center pb-10">
                <UserCircle className="w-16 h-16 text-white " />
                <h5 className="mt-2 mb-1 text-xl font-medium">
                  {data?.userName}
                </h5>
                <span className="text-sm capitalize text-primary ">
                  {data?.role}
                </span>
              </div>
            </div>
          </div>
          {/* profile details */}
          <div className="relative w-full lg:w-9/12">
            <div className="h-full border cursor-pointer bg-third border-neutral-800 rounded-xl">
              <div className="text-text">
                <div className="absolute -right-4 -top-4">
                  <EditUserProfile />
                </div>
                {/* main  */}

                <div className="grid py-8 lg:py-16 md:grid-cols-2">
                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-2 px-4 py-2 font-semibold text-primary">
                      <User />
                      Name :{" "}
                    </div>
                    <div className="px-4 py-2">{data?.userName}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-2 px-4 py-2 font-semibold text-primary">
                      <Contact /> Contact No :
                    </div>
                    <div className="px-4 py-2">{data?.phone}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-2 px-4 py-2 font-semibold text-primary">
                      <Home /> Address :
                    </div>
                    <div className="px-4 py-2">{data?.address}</div>
                  </div>

                  <div className="grid grid-cols-2 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2 font-semibold text-primary">
                      <Mail /> Email :
                    </div>
                    <div className="flex items-center w-40 px-4 py-2 overflow-scroll lg:w-full lg:overflow-hidden ">
                      <p>{data?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* stats */}
        {data?.role === "admin" && <AdminStats />}
      </div>
    </div>
  );
};

export default DashboardHome;
