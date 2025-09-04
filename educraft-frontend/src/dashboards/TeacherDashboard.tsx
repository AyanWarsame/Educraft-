import type{ FC } from "react";
import { useState } from "react";
import {
  BookOpen,
  Users,
  Clock,
  Star,
  Bell,
  Search,
  User,
  // ChevronDown,
  Home,
  FileText,
  BarChart3,
  // Settings,
  GraduationCap,
//   CheckCircle,
//   AlertCircle,
  MessageSquare,
  PieChart,
//   Bookmark,
  Download,
//   Calendar,
  Filter,
  MoreVertical,
  Eye,
//   Edit,
  Trash2,
  Plus,
  Book,
//   Target,
//   Award,
  TrendingUp,
  Mail
} from "lucide-react";

// Types
interface Course {
  id: number;
  title: string;
  students: number;
  completion: number;
  status: "active" | "completed" | "draft";
  color: string;
}

interface PendingAction {
  id: number;
  title: string;
  count: number;
  type: "assignment" | "submission" | "discussion";
}

interface StudentActivity {
  id: number;
  name: string;
  action: string;
  time: string;
  course: string;
}

interface Student {
  id: number;
  name: string;
  email: string;
  enrolled: string;
  progress: number;
  lastActivity: string;
}

// Mock Data
const courses: Course[] = [
  { id: 1, title: "Introduction to React", students: 45, completion: 68, status: "active", color: "bg-blue-500" },
  { id: 2, title: "Advanced JavaScript", students: 32, completion: 82, status: "active", color: "bg-green-500" },
  { id: 3, title: "Web Development Fundamentals", students: 78, completion: 91, status: "completed", color: "bg-purple-500" },
  { id: 4, title: "Data Structures & Algorithms", students: 56, completion: 45, status: "active", color: "bg-orange-500" },
  { id: 5, title: "UI/UX Design Principles", students: 29, completion: 72, status: "draft", color: "bg-pink-500" },
];

const pendingActions: PendingAction[] = [
  { id: 1, title: "React Component Assignment", count: 15, type: "assignment" },
  { id: 2, title: "Final Project Submissions", count: 8, type: "submission" },
  { id: 3, title: "New Discussion Posts", count: 23, type: "discussion" },
];

const studentActivities: StudentActivity[] = [
  { id: 1, name: "Alice Johnson", action: "Completed Module 5 in React", time: "2h ago", course: "Introduction to React" },
  { id: 2, name: "Bob Smith", action: "Submitted Assignment in JavaScript", time: "4h ago", course: "Advanced JavaScript" },
  { id: 3, name: "Carol Davis", action: "Asked a question in React", time: "6h ago", course: "Introduction to React" },
  { id: 4, name: "David Wilson", action: "Achieved 100% on Quiz 3", time: "1d ago", course: "Web Development Fundamentals" },
];

const students: Student[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", enrolled: "2023-09-15", progress: 85, lastActivity: "2 hours ago" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", enrolled: "2023-09-20", progress: 72, lastActivity: "5 hours ago" },
  { id: 3, name: "Carol Davis", email: "carol@example.com", enrolled: "2023-09-22", progress: 68, lastActivity: "1 day ago" },
  { id: 4, name: "David Wilson", email: "david@example.com", enrolled: "2023-09-25", progress: 91, lastActivity: "3 hours ago" },
  { id: 5, name: "Eva Brown", email: "eva@example.com", enrolled: "2023-09-28", progress: 45, lastActivity: "2 days ago" },
];

// Sidebar Component
const Sidebar: FC<{ activePage: string; setActivePage: (page: string) => void }> = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="mr-2 h-5 w-5" /> },
    { id: "students", label: "Students", icon: <Users className="mr-2 h-5 w-5" /> },
    { id: "courses", label: "Courses", icon: <Book className="mr-2 h-5 w-5" /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 className="mr-2 h-5 w-5" /> },
  
  ];

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      <div>
        <div className="p-6 font-bold text-xl text-blue-600 flex items-center">
          <GraduationCap className="mr-2 h-6 w-6" />
          Educraft
        </div>
        <nav className="space-y-2 px-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex items-center w-full p-2 rounded-lg ${activePage === item.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium">Dr. Sarah Johnson</p>
            <p className="text-sm text-gray-500">Computer Science</p>
          </div>
        </div>
        <button className="text-red-500 text-sm mt-2">Sign Out</button>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar: FC<{ pageTitle: string }> = ({ pageTitle }) => {
  return (
    <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{pageTitle}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="h-8 w-16 text-blue-600" />
          </div>
         
        </div>
      </div>
    </div>
  );
};

// Dashboard Card Component
const DashboardCard: FC<{ icon: any; label: string; value: string; trend?: string }> = ({ icon: Icon, label, value, trend }) => {
  return (
    <div className="p-4 bg-white rounded-lg border shadow-sm flex items-center justify-between">
      <div className="flex items-center">
        <div className="p-3 bg-blue-100 rounded-lg mr-4">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <span className="text-2xl font-bold">{value}</span>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
      {trend && (
        <div className="flex items-center text-green-600">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="text-sm">{trend}</span>
        </div>
      )}
    </div>
  );
};

// Course Card Component
const CourseCard: FC<{ course: Course }> = ({ course }) => {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
    draft: "bg-gray-100 text-gray-800"
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center`}>
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[course.status]}`}>
          {course.status}
        </span>
      </div>
      <h3 className="font-bold text-lg mb-1">{course.title}</h3>
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>{course.students} students</span>
        <span>{course.completion}% complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className={`h-2 rounded-full ${course.color}`}
          style={{ width: `${course.completion}%` }}
        ></div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Manage
        </button>
        <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

// Pending Action Component
const PendingAction: FC<{ action: PendingAction }> = ({ action }) => {
  const typeIcons = {
    assignment: <FileText className="h-5 w-5 text-blue-600" />,
    submission: <Download className="h-5 w-5 text-green-600" />,
    discussion: <MessageSquare className="h-5 w-5 text-purple-600" />
  };

  return (
    <div className="flex items-center justify-between p-3 border-b last:border-b-0">
      <div className="flex items-center">
        <div className="p-2 bg-gray-100 rounded-lg mr-3">
          {typeIcons[action.type]}
        </div>
        <div>
          <h4 className="font-medium">{action.title}</h4>
          <p className="text-sm text-gray-500">{action.count} pending</p>
        </div>
      </div>
      <button className="text-blue-600 text-sm font-medium">Review</button>
    </div>
  );
};

// Student Activity Component
const StudentActivity: FC<{ activity: StudentActivity }> = ({ activity }) => {
  return (
    <div className="flex items-start p-3 border-b last:border-b-0">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
        <User className="h-5 w-5 text-blue-600" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{activity.name}</h4>
        <p className="text-sm">{activity.action}</p>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">{activity.course}</span>
          <span className="text-xs text-gray-500">{activity.time}</span>
        </div>
      </div>
    </div>
  );
};

// Dashboard Page
const TeacherDashboard: FC = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, <span className="text-blue-600">Dr. Johnson!</span></h1>
          <p className="text-gray-600">Here's what's happening with your courses today.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          New Course
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard icon={BookOpen} label="Active Courses" value="4" trend="+2" />
        <DashboardCard icon={Users} label="Total Students" value="156" trend="+12" />
        <DashboardCard icon={Clock} label="Pending Reviews" value="23" />
        <DashboardCard icon={Star} label="Avg. Rating" value="4.8" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Courses Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Courses</h2>
            <button className="text-blue-600 text-sm font-medium">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Pending + Student Activity */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Pending Actions</h2>
              <button className="text-blue-600 text-sm font-medium">View All</button>
            </div>
            <div>
              {pendingActions.map(action => (
                <PendingAction key={action.id} action={action} />
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Recent Student Activity</h2>
              <button className="text-blue-600 text-sm font-medium">View All</button>
            </div>
            <div>
              {studentActivities.map(activity => (
                <StudentActivity key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border rounded-lg">
            <p className="text-2xl font-bold">80%</p>
            <p className="text-gray-500 text-sm">Avg Course Completion</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-2xl font-bold">4.8/5</p>
            <p className="text-gray-500 text-sm">Student Satisfaction</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-2xl font-bold">2.3h</p>
            <p className="text-gray-500 text-sm">Avg Response Time</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-2xl font-bold">156</p>
            <p className="text-gray-500 text-sm">Active Discussions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Students Page
const StudentsPage: FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Management</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add Student
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg ${activeTab === "all" ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
            >
              All Students
            </button>
            <button 
              onClick={() => setActiveTab("active")}
              className={`px-4 py-2 rounded-lg ${activeTab === "active" ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
            >
              Active
            </button>
            <button 
              onClick={() => setActiveTab("inactive")}
              className={`px-4 py-2 rounded-lg ${activeTab === "inactive" ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
            >
              Inactive
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map(student => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.enrolled}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{student.progress}% complete</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.lastActivity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Analytics Page
const AnalyticsPage: FC = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Course Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Student Engagement</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
            <span className="ml-2 text-gray-600">Engagement chart visualization</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Completion Rate</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Avg. Quiz Score</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Assignment Submission</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full w-[92%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Student Satisfaction</span>
                <span className="text-sm font-medium">4.8/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Course Performance</h2>
          <div className="space-y-4">
            {courses.map(course => (
              <div key={course.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${course.color}`}></div>
                  <span className="text-sm">{course.title}</span>
                </div>
                <div className="text-sm font-medium">{course.completion}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Student Distribution</h2>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <PieChart className="h-12 w-12 text-gray-400" />
            <span className="ml-2 text-gray-600">Distribution chart visualization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// // Settings Page
// const SettingsPage: FC = () => {
//   const [activeTab, setActiveTab] = useState("profile");

//   const tabs = [
//     { id: "profile", label: "Profile" },
//     { id: "account", label: "Account" },
//     { id: "notifications", label: "Notifications" },
//     { id: "privacy", label: "Privacy" },
//   ];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">Settings</h1>

//       <div className="bg-white rounded-lg border shadow-sm">
//         <div className="border-b">
//           <nav className="flex space-x-8 px-6">
//             {tabs.map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="p-6">
//           {activeTab === "profile" && (
//             <div className="max-w-lg">
//               <h2 className="text-lg font-medium mb-4">Profile Information</h2>
//               <div className="space-y-4">
//                 <div className="flex items-center mb-6">
//                   <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
//                     <User className="h-8 w-8 text-blue-600" />
//                   </div>
//                   <div>
//                     <button className="text-blue-600 text-sm font-medium">Upload new photo</button>
//                     <p className="text-xs text-gray-500">Recommended: JPG, PNG or GIF, Max 5MB</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                     <input type="text" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Sarah" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                     <input type="text" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Johnson" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//                   <input type="text" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Professor of Computer Science" />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
//                   <textarea className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" 
//                     placeholder="Tell us about yourself..." 
//                     defaultValue="Specialized in web development and software engineering with 10+ years of teaching experience."
//                   ></textarea>
//                 </div>

//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save Changes</button>
//               </div>
//             </div>
//           )}

//           {activeTab === "account" && (
//             <div className="max-w-lg">
//               <h2 className="text-lg font-medium mb-4">Account Settings</h2>
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="font-medium mb-2">Change Password</h3>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
//                       <input type="password" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
//                       <input type="password" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
//                       <input type="password" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                     </div>
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Update Password</button>
//                   </div>
//                 </div>

//                 <div className="border-t pt-6">
//                   <h3 className="font-medium mb-2 text-red-600">Danger Zone</h3>
//                   <p className="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
//                   <button className="border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50">Delete Account</button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "notifications" && (
//             <div className="max-w-lg">
//               <h2 className="text-lg font-medium mb-4">Notification Settings</h2>
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="font-medium mb-3">Course Notifications</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm">New assignments submitted</span>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" defaultChecked />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm">Discussion posts</span>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" defaultChecked />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm">Student questions</span>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" defaultChecked />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="font-medium mb-3">System Notifications</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm">Course updates</span>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" defaultChecked />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm">Platform announcements</span>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save Preferences</button>
//               </div>
//             </div>
//           )}

//           {activeTab === "privacy" && (
//             <div className="max-w-lg">
//               <h2 className="text-lg font-medium mb-4">Privacy Settings</h2>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="font-medium">Profile Visibility</h3>
//                     <p className="text-sm text-gray-600">Who can see your profile and activity</p>
//                   </div>
//                   <select className="border rounded-lg px-3 py-1">
//                     <option>Students Only</option>
//                     <option>Faculty Only</option>
//                     <option>Private</option>
//                   </select>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="font-medium">Data Sharing</h3>
//                     <p className="text-sm text-gray-600">Allow anonymous usage data collection</p>
//                   </div>
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input type="checkbox" className="sr-only peer" />
//                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                   </label>
//                 </div>

//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save Preferences</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// Main App Component
const App: FC = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const pageTitles = {
    dashboard: "Dashboard",
    students: "Student Management",
    courses: "Course Management",
    analytics: "Analytics",
    communications: "Communications",
    settings: "Settings"
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <TeacherDashboard />;
      case "students":
        return <StudentsPage />;
      case "analytics":
        return <AnalyticsPage />;
      default:
        return <TeacherDashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <Navbar pageTitle={pageTitles[activePage as keyof typeof pageTitles] || "Dashboard"} />
        {renderPage()}
      </div>
    </div>
  );
};

export default App;