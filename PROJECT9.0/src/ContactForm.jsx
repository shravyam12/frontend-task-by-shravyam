import React, { useState } from "react";
import './App.css';
import './contactForm.css';
import myimage from "./images/pict.png";
const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		description: "",
		services: [],
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// Perform form validation here
		// Construct the request body
		const requestBody = new URLSearchParams(formData).toString();
		// Send a POST request to the API endpoint
		fetch("http://formz.in/api/task", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: requestBody,
		})
			.then((response) => {
				if (response.status === 201) {
					// Handle successful submission
				} else {
					// Handle errors
				}
			})
			.catch((error) => {
				// Handle network errors
			});
	};
	return (
		<div>
			<h1>Contact Form</h1>
			<img src={myimage}/>
			<br/>
			<br/>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
</div>
<div>
		
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div>
				
					<label htmlFor="phone">Phone Number:</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
					/>
				
				</div>
				<div>
					<label htmlFor="description">How Can We Help?</label>
					<textarea
						id="description"
						name="description"
						value={formData.description}
						onChange={handleChange}
					></textarea>
				
					<br/>
					</div>
					<div>
					<label>Services</label>
					<br />
					
					<input
						type="checkbox"
						name="services[]"
						value={formData.services[0]}
						onChange={handleChange}
					/>Web design
					<br />
					
					<input
						type="checkbox"
						name="services[]"
						value={formData.services[1]}
						onChange={handleChange}
					/>UX design
					<br />
					
					<input
						type="checkbox"
						name="services[]"
						value={formData.services[1]}
						onChange={handleChange}
					/>Documentation
					<br />
					
					<input
						type="checkbox"
						name="services[]"
						value={formData.services[2]}
						onChange={handleChange}
					/>Other
</div>				
				<button type="submit">Send Message</button>
			</form>
		</div>
	);
};
export default ContactForm;
