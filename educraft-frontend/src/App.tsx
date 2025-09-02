import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/LoginForm';
import PersonalDetailsForm from './pages/PersonalDetailsForm';
import StudentDashboard from './dashboards/StudentDashboard';
import TeacherDashboard from  "./dashboards/TeacherDashboard";
import CoursesPage from './pages/CoursesPage';
import ProgressPage from './pages/ProgressPage';
import DiscussionsPage from './pages/DiscussionsPage';
import AssignmentsPage from './pages/AssignmentsPage';
import SettingsPage from './pages/SettingsPage';
import AdminDashboard from "./dashboards/AdminDashboard"


function App() {




	return (
		<div className="App">
			<FrappeProvider  url={import.meta.env.VITE_FRAPPE_BACKEND_URL}
		      
			>
				<Router>
					
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Registration" element={<Registration />} />
						<Route path="/LoginForm" element={<Login />} /> 
						<Route path="/PersonalDetailsForm" element={<PersonalDetailsForm />} />
						<Route path="/StudentDashboard" element={<StudentDashboard/>} />
						<Route path='/TeacherDashboard' element={< TeacherDashboard/>}/>
						<Route path='/CoursesPage' element={< CoursesPage/>}/>
						<Route path='/ProgressPage' element={< ProgressPage/>}/>
						<Route path='/DiscussionsPage' element={< DiscussionsPage/>}/>
						<Route path='/AssignmentsPage' element={< AssignmentsPage/>}/>
						<Route path='/SettingsPage' element={< SettingsPage/>}/>
						<Route path='/AdminDashboard' element={< AdminDashboard/>}/>
					</Routes>
				</Router>
			</FrappeProvider>
		</div>
	);
}
export default App
