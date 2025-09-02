import type { FC } from "react";
import { 
// Bell, 
Search, 
User, 
// ChevronDown 
} from "lucide-react";



const Dashnavbar: FC = () => {
  return (
    <div className=" border-b shadow-lg px-6 py-4 flex items-center justify-end">
      
      <div className="flex items-center space-x-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 w-96  pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
        </button> */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="h-8 w-24 text-blue-600" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashnavbar;