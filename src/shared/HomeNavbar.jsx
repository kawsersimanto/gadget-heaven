import { Link, NavLink } from "react-router-dom";

const HomeNavbar = () => {
  const menus = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "QNA",
      path: "/qna",
    },
    {
      label: "Dashboard",
      path: "/dashboard",
    },
  ];
  return (
    <header className="lg:py-2 py-0">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full p-0 justify-between">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Link
              to="/"
              className="sm:text-xl text-[17px] font-bold text-white"
            >
              Gadget Heaven
            </Link>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal gap-[48px]">
                {menus.map((menu, index) => (
                  <li key={index}>
                    <NavLink
                      to={menu.path}
                      className={({ isActive }) =>
                        isActive
                          ? "active p-0 !bg-transparent !text-white border-b border-white pb-[2px] rounded-none"
                          : "p-0 !bg-transparent !text-white font-medium transition-colors ease-in-out duration-300 hover:!text-white"
                      }
                    >
                      {menu.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center sm:gap-4 gap-2">
              <Link
                to="/dashboard?tab=cart"
                className="w-[40px] h-[40px] rounded-full border border-[rgba(11,11,11,0.10)] flex items-center justify-center bg-white"
              >
                <img src="/cart.svg" alt="Cart Icon" />
              </Link>
              <Link
                to="/dashboard?tab=wishlist"
                className="w-[40px] h-[40px] rounded-full border border-[rgba(11,11,11,0.10)] flex items-center justify-center bg-white"
              >
                <img src="/wishlist.svg" alt="Wishlist Icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white min-h-full w-80 p-4 gap-4">
            {menus.map((menu, index) => (
              <li key={index}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    isActive
                      ? "active p-0 !bg-transparent !text-primary"
                      : "p-0 !bg-transparent !text-[rgba(11,11,11,0.70)] font-medium transition-colors ease-in-out duration-300 hover:!text-primary"
                  }
                >
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
