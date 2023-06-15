import React, { useState } from "react";
import { useNavigate, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import './contactForm.css';

const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
		console.log("Login:", username, password);
	};
	const handleNewUserClick = () => {
		navigate("/register"); // Navigate to the register page
	};
	const handleloginClick = () => {
		navigate("/contact");
	};
	return (
		<div>
			<h1>Hello!</h1>
			<form onSubmit={handleSubmit}>
			
				<label>
					Username:
					<input type="text" value={username} onChange={handleUsernameChange} />
				</label>
				
			
				<br />
				<br />
			
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>
		
				<br />
				<br />
			

				<button type="submit" onClick={handleloginClick}>
					Login
				</button>
				<br />
				<br/>
				
				<button type="submit" onClick={handleNewUserClick}>
					Register
				</button>
				
			</form>
			</div>
		
	);
};
export default Login;
