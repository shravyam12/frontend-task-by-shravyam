import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ContactForm from "./ContactForm";
import './App.css';
import './contactForm.css';
const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/contact" element={<ContactForm />} />
			</Route>
		)
	);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
