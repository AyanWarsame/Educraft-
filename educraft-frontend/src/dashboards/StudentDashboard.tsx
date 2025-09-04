import { useState, type FC } from "react";

import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Award, 
  Calendar,
  // Users,
  // Star,
  // Target,
  // BarChart2,
  // MessageCircle,
   Book,
  // BarChart2,
  // MessageCircle,
  Home,
  FileText,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import Dashnavbar from "../components/Dashnavbar";
import { MessageCircle } from "react-feather";

// Types
interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  color: string;
}

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  priority: string;
}



// Mock Data
const courses: Course[] = [
  { id: 1, title: "Introduction to React", instructor: "Dr. Sarah Johnson", progress: 75, color: "bg-blue-500" },
  { id: 2, title: "Data Structures & Algorithms", instructor: "Prof. Michael Chen", progress: 45, color: "bg-green-500" },
  { id: 3, title: "UI/UX Design Fundamentals", instructor: "Emily Rodriguez", progress: 90, color: "bg-purple-500" },
];

const assignments: Assignment[] = [
  { id: 1, title: "React Component Project", course: "Introduction to React", dueDate: "Tomorrow", priority: "high" },
  { id: 2, title: "Binary Trees Assignment", course: "Data Structures & Algorithms", dueDate: "3 days", priority: "medium" },
  { id: 3, title: "Design System Documentation", course: "UI/UX Design Fundamentals", dueDate: "5 days", priority: "low" },
];




const CourseCard: FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center`}>
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <div className="text-sm text-gray-500">{course.progress}% complete</div>
      </div>
      <h3 className="font-bold text-lg mb-1">{course.title}</h3>
      <p className="text-sm text-gray-500 mb-4">by {course.instructor}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className={`h-2 rounded-full ${course.color}`}
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
      <button className="w-full mt-4 bg-indigoDeep hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors">
        Continue Learning
      </button>
    </div>
  );
};

const AssignmentCard: FC<{ assignment: Assignment }> = ({ assignment }) => {
  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-blue-100 text-blue-800"
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[assignment.priority as keyof typeof priorityColors]}`}>
          {assignment.priority} priority
        </span>
        <span className="text-sm text-gray-500 flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          Due in {assignment.dueDate}
        </span>
      </div>
      <h3 className="font-bold text-lg mb-1">{assignment.title}</h3>
      <p className="text-sm text-gray-500 mb-4">for {assignment.course}</p>
      <div className="flex space-x-2">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Start Assignment
        </button>
        <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
          <Calendar className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};



const StudentDashboard: FC = () => {

const [_activeTab, _setActiveTab] = useState("all");

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen ml-64">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold">Welcome back, Ayan!</h1>
        <p className="text-gray-600">Ready to continue your learning journey?</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-lg border shadow-sm flex items-center">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <span className="text-2xl font-bold">3</span>
            <p className="text-sm text-gray-500">Active Courses</p>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg border shadow-sm flex items-center">
          <div className="p-3 bg-green-100 rounded-lg mr-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <span className="text-2xl font-bold">12</span>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg border shadow-sm flex items-center">
          <div className="p-3 bg-yellow-100 rounded-lg mr-4">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <span className="text-2xl font-bold">15.5</span>
            <p className="text-sm text-gray-500">Hours This Week</p>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg border shadow-sm flex items-center">
          <div className="p-3 bg-purple-100 rounded-lg mr-4">
            <Award className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <span className="text-2xl font-bold">24</span>
            <p className="text-sm text-gray-500">Achievements</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Learning Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Continue Learning</h2>
            <button className="text-blue-600 text-sm font-medium">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Upcoming Assignments</h2>
            <button className="text-blue-600 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {assignments.map(assignment => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
};

const App: FC = () => {
  return (
    <div className="flex">
      <Sidebar
            title="EduCraft"
            userName="Ayan Mohamed"
            userRole="Computer Science"
            activePath="/StudentDashboard"
            navItems={[
              { label: "Dashboard", href: "/StudentDashboard", icon: <Home /> },
              { label: "My Courses", href: "/CoursesPage", icon: <Book /> },
              { label: "Discussions", href: "/DiscussionsPage", icon: <MessageCircle /> },
              { label: "Assignments", href: "/AssignmentsPage", icon: <FileText /> },
            
          ]}
          onSignOut={() => console.log("Signing out...")}
       />

      <div className="flex-1 flex flex-col">
        <Dashnavbar 
        
        
        
        />
        <StudentDashboard />
      </div>
    </div>
  );
};

export default App;