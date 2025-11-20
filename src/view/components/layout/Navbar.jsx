import {
  Navbar as FlowNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
  Button,
} from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DownOutlined, UpOutlined, UserOutlined } from "@ant-design/icons";
import { menuData } from "../../../models/menu/menuData";
import { useNavbarPresenter } from "../../../presenters/navbar-presenter";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled } = useNavbarPresenter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const filteredMenuData = isLoggedIn 
    ? menuData.filter(item => item.path !== "/login")
    : menuData;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const role = localStorage.getItem("userRole");

    if (token && user) {
      setIsLoggedIn(true);
      setUserName(user.nama_lengkap || user.nama || "User");
      setUserRole(role || "");
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setOpenDropdown(false);
    navigate("/");
  };

  const getDashboardLink = () => {
    if (userRole === "super_admin") return "/dashboard/superadmin";
    if (userRole === "guru_bk") return "/dashboard/gurubk";
    if (userRole === "siswa") return "/dashboard/konsultasi";
    return "/dashboard";
  };

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "fixed bg-white shadow-md" : "relative bg-white"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4">
        <FlowNavbar fluid rounded>
          <NavbarBrand as={Link} to="/">
            <img src="/assets/images/logo-dark.svg" className="h-6" alt="Logo Talk Up" />
          </NavbarBrand>

          <NavbarToggle />

          <NavbarCollapse>
            {filteredMenuData.map((item, index) => (
              <NavbarLink
                key={index}
                as={Link}
                to={item.path}
                active={location.pathname === item.path}
              >
                {item.name}
              </NavbarLink>
            ))}

            {isLoggedIn ? (
              <div className="flex items-center relative">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenDropdown(!openDropdown)}>
                  <div className="bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
                    <UserOutlined className="text-sm !text-white" />
                  </div>
                  {openDropdown ? (
                    <UpOutlined className="text-xs" />
                  ) : (
                    <DownOutlined className="text-xs" />
                  )}
                </div>

                {openDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setOpenDropdown(false)}
                    />
                    <div className="absolute right-0 top-12 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 w-44 z-20">
                      <Link
                        to={getDashboardLink()}
                        className="block px-6 py-2.5 hover:bg-gray-100 text-gray-700 text-sm"
                        onClick={() => setOpenDropdown(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-6 py-2.5 hover:bg-gray-100 text-red-600 text-sm"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Button as={Link} to="/register" color="primary" size="sm">
                Register
              </Button>
            )}
          </NavbarCollapse>
        </FlowNavbar>
      </div>
    </nav>
  );
};

export default Navbar;