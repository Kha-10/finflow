import React from "react";
import { Home, ShoppingCart, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon:LayoutDashboard , label: "Dashboard", path: "/dashboard" },
    { icon: ShoppingCart, label: "Purchases", path: "/purchases" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 text-foreground antialiased border border-border h-screen fixed left-0 top-15">
        {/* <div className="p-4">
          <h1 className="text-xl font-bold">Purchase Tracker</h1>
        </div> */}
        <nav className="flex-1 py-2 px-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg ${
                isActive(item.path)
                  ? " text-btn"
                  : "hover:bg-primary-foreground"
              }`}
            >
              <item.icon
                className={`w-5 h-5 mr-3 ${
                  isActive(item.path) ? "fill-blue-500" : ""
                }`}
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="z-50 md:hidden fixed bottom-0 left-0 right-0 bg-card text-foreground antialiased">
        <nav className="flex justify-around">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full flex flex-col items-center py-3 ${
                isActive(item.path)
                  ? "text-btn"
                  : "hover:bg-primary-foreground text-muted-foreground "
              }`}
            >
              <item.icon
                className={`w-5 h-5 mb-1 ${
                  isActive(item.path) ? "fill-blue-500" : ""
                }`}
              />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
