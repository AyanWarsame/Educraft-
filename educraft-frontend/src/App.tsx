import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';



function App() {




	return (
		<div className="App">
			<FrappeProvider  url={import.meta.env.VITE_FRAPPE_BACKEND_URL}
		      
			>
				<Router>
					
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Router>
			</FrappeProvider>
		</div>
	);
}
export default App
