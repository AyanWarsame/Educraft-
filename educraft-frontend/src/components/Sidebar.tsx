import type { FC, ReactNode } from "react";
import {
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};



type SidebarProps = {
  title: string;
  userName: string;
  userRole: string;
  activePath: string;
  navItems: NavItem[];
  onSignOut?: () => void;
};

const Sidebar: FC<SidebarProps> = ({ 
  userName,
  userRole,
  navItems,
  activePath,
  onSignOut,
}) => {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen overflow-hidden bg-white border-r flex flex-col justify-between z-50">
      <div>
        <div className="p-6 font-bold text-xl text-blue-600">Educraft</div>
        <nav className="space-y-2 px-4">
          {navItems.map(({ label, href, icon }) => (
            <a
              key={href}
              href={href}
              className={`flex items-center p-2 rounded-lg ${
                activePath === href
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="mr-2 h-5 w-5">{icon}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <User className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <p className="font-medium">{userName}</p>
            <p className="text-sm text-gray-500">{userRole}</p>
          </div>
        </div>
        < Link to="/" >
        <button
          className="text-red-500 text-md mt-2"
          onClick={onSignOut}
        >
          Sign Out
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
