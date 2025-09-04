import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/LoginForm';
import PersonalDetailsForm from './pages/PersonalDetailsForm';
import StudentDashboard from './dashboards/StudentDashboard';
import TeacherDashboard from  "./dashboards/TeacherDashboard";
import CoursesPage from './pages/CoursesPage';
import PaymentPage from './pages/PaymentPage';
import DiscussionsPage from './pages/DiscussionsPage';
import AssignmentsPage from './pages/AssignmentsPage';
import SettingsPage from './pages/SettingsPage';
import Sessions from "./pages/Sessions";
import Courses from "./pages/Courses";




function App() {




	return (
		<div className="App">
			<FrappeProvider   url={"http://localhost:8002"}
		       enableSocket={false}
          tokenParams={{
			useToken: true,
			type: "token", 
			token: () => `${import.meta.env.VITE_API_KEY}:${import.meta.env.VITE_API_SECRET}`,
		}}
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
						<Route path='/PaymentPage' element={< PaymentPage/>}/>
						<Route path='/DiscussionsPage' element={< DiscussionsPage/>}/>
						<Route path='/AssignmentsPage' element={< AssignmentsPage/>}/>
						<Route path='/SettingsPage' element={< SettingsPage/>}/>
						<Route path='/sessions' element={< Sessions/>}/>
						<Route path='/courses' element={< Courses/>}/>

					</Routes>
				</Router>
			</FrappeProvider>
		</div>
	);
}
export default App
