import React, { useState } from "react";
import { useNavigate, BrowserRouter as Router } from "react-router-dom";
import './contactForm.css';
const Register = () => {
	const [username, setUsername] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [altemail, setAltemail] = useState("");
	const [orgname, setOrgname] = useState("");
	const [orgrole, setOrgrole] = useState("");
	const [orgdate, setOrgdate] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};
	const handlephoneChange = (e) => {
		setPhone(e.target.value);
	};
	const handleemailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlealtemailChange = (e) => {
		setAltemail(e.target.value);
	};
	const handleorgnameChange = (e) => {
		setOrgname(e.target.value);
	};
	const handleorgroleChange = (e) => {
		setOrgrole(e.target.value);
	};
	const handleorgdateChange = (e) => {
		setOrgdate(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handlereg = (e) => {
		navigate("/contact");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// Perform registration logic here
		console.log("Register:", username, password);
	};
	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
			
				<label>Name
				  <input type="text" value={username} onChange={handleUsernameChange} />
				</label>
				<br /><br />

				<label>Phone Number
				  <input type="tel" value={phone} onChange={handlephoneChange} />
				</label>
				<br /><br />
				
				<label>Email
				  <input type="email" value={email} onChange={handleemailChange} />
				</label>
				<br /><br />

				<label>Alternate Email
				  <input type="email" value={altemail} onChange={handlealtemailChange} />
				</label>
				<br /><br />
                
				<label>Organization Name
			      <input type="text" value={orgname} onChange={handleorgnameChange} />
				</label>
				<br /><br />
				<label>Role in organization
			      <input type="text" value={orgrole} onChange={handleorgroleChange} />
				</label>
				<br /><br />

				<label>Valid till  date
					<input type="date" value={orgdate} onChange={handleorgdateChange} />
				</label>
				<br /><br />

				<label>Password
					<input type="password" value={password} onChange={handlePasswordChange} />
				</label>
				<br /><br />

				<button type="submit" onClick={handlereg}>
					Register
				</button>
			</form>
		</div>
	);
};
export default Register;
