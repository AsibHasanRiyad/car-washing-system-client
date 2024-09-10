import { Home, User, Settings, CalendarDays } from "lucide-react"; // Importing Lucide icons
import { useAppSelector } from "@/redux/hook";
import { currentDashboardStatus } from "@/redux/features/DashboardSlice";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const isNavbarVisible = useAppSelector(currentDashboardStatus);

  return (
    <div className="flex min-h-screen ">
      <aside
        id="default-sidebar"
        className={` transition-all duration-300 fixed min-h-screen lg:relative z-50 overflow-y-auto ${
          isNavbarVisible ? "w-64  " : " w-0 lg:w-16"
        } bg-primary  h-auto   `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 ">
          <ul className="mt-10 space-y-2 font-medium">
            {/* Dashboard */}

            <li>
              <Link
                to={"/dashboard"}
                className="flex items-center p-2 text-white transition-all duration-300 rounded-lg dark:text-white hover:bg-secondary dark:hover:bg-gray-700 group"
              >
                {isNavbarVisible ? (
                  <p className="flex items-center whitespace-nowrap">
                    <Home className="w-6 h-6" />
                    <span className="ml-3">Home</span>
                  </p>
                ) : (
                  <Home className="w-6 h-6 mx-auto" />
                )}
              </Link>
            </li>
            <li>
              <Link
                to={"service-management"}
                className="flex items-center p-2 text-white transition-all duration-300 rounded-lg dark:text-white hover:bg-secondary dark:hover:bg-gray-700 group"
              >
                {isNavbarVisible ? (
                  <p className="flex items-center whitespace-nowrap">
                    <Settings className="w-6 h-6" />
                    <span className="ml-3">Service Management</span>
                  </p>
                ) : (
                  <Settings className="w-6 h-6 mx-auto" />
                )}
              </Link>
            </li>
            <li>
              <Link
                to={"slot-management"}
                className="flex items-center p-2 text-white transition-all duration-300 rounded-lg hover:bg-secondary group"
              >
                {isNavbarVisible ? (
                  <p className="flex items-center whitespace-nowrap">
                    <CalendarDays className="w-6 h-6" />
                    <span className="ml-3">Slot Management</span>
                  </p>
                ) : (
                  <CalendarDays className="w-6 h-6 mx-auto" />
                )}
              </Link>
            </li>
            <li>
              <Link
                to={"user-management"}
                className="flex items-center p-2 text-white transition-all duration-300 rounded-lg dark:text-white hover:bg-secondary dark:hover:bg-gray-700 group"
              >
                {isNavbarVisible ? (
                  <p className="flex items-center whitespace-nowrap">
                    <User className="w-6 h-6" />
                    <span className="ml-3">User Management</span>
                  </p>
                ) : (
                  <User className="w-6 h-6 mx-auto" />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="p-4 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
