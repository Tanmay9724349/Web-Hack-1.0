// Filename - App.js

import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
	const [userinfo, setUserInfo] = useState({
		languages: [],
		response: [],
	});
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phonenumber, setPhonenumber] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [incidate, setIncidate] = useState('');
	const [incilocation, setIncilocation] = useState('');
	const [incidescription, setIncidescription] = useState('');
	const [witnessname, setWitnessname] = useState('');
	const [witnesscontact, setWitnesscontact] = useState('');
	const [additionalinfo, setAdditionalinfo] = useState('');
	const [ack, setAck] = useState('false');

	const handleChange = (e) => {
		// Destructuring
		const { value, checked } = e.target;
		const { languages } = userinfo;

		// Case 1 : The user checks the box
		if (checked) {
			setUserInfo({
				languages: [...languages, value],
				response: [...languages, value],
			});
		}

		// Case 2 : The user unchecks the box
		else {
			setUserInfo({
				languages: languages.filter(
					(e) => e !== value
				),
				response: languages.filter(
					(e) => e !== value
				),
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("", userinfo);
		console.log('', name);
		console.log('', email);
		console.log('', phonenumber);
		console.log('', age);
		console.log('', gender);
		console.log('', incidate);
		console.log('', incilocation);
		console.log('', incidescription);
		console.log('', witnessname);
		console.log('', witnesscontact);
		console.log('', additionalinfo);
		console.log('', ack);
	}

	return (
		<>
			<div className="container-fluid top ">
				<div className="container mt-5 pb-5 pt-5">
					<h3 className="form-head-contact-h3 ">
					</h3>

					<form>
						<Form.Group>
							<Form.Label>Enter your full name:</Form.Label>
							<Form.Control type="text"
								placeholder="Enter your full name" />
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label>Enter your email address:</Form.Label>
							<Form.Control type="email"
								placeholder="Enter your your email address" />
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label>Enter your Contact Number:</Form.Label>
							<Form.Control type="number" placeholder="Enter your age" />
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label>Enter your age:</Form.Label>
							<Form.Control type="number" placeholder="Enter your age" />
						</Form.Group>
						<br />
						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							Gender:
						</label>
						{['radio'].map((type) => (
							<div key={`inline-${type}`} className="mb-3">
								<Form.Check
									inline
									label="Female"
									name="group1"
									type={type}
									id={`inline-${type}-1`}
								/>
								<Form.Check
									inline
									label="Male"
									name="group1"
									type={type}
									id={`inline-${type}-2`}
								/>
								<Form.Check
									inline
									label="Other"
									name="group1"
									type={type}
									id={`inline-${type}-3`}
								/>

							</div>
						))}

						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							<b>Incident Details:</b>
						</label>
						<br />
						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							Date:
						</label>
						<br />
						<input type="date" />
						<br />
						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							Location:

						</label>
						<br />

						<textarea></textarea>
						<br />
						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							Description of Harrasment:
						</label>
						<br />
						<textarea></textarea>

						<br />



						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							<b>Type Of Harrasment:</b>
						</label>


						<div className="row">
							<div className="col-md-6">
								<div className="form-check m-3">
									<input
										className="form-check-input"
										type="checkbox"
										name="languages"
										value="Javascript"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Javascript
									</label>
								</div>
								<div className="form-check m-3">
									<input
										className="form-check-input"
										type="checkbox"
										name="languages"
										value="Python"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Python
									</label>
								</div>
								<div className="form-check m-3">
									<input
										className="form-check-input"
										type="checkbox"
										name="languages"
										value="Java"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Java
									</label>
								</div>
								<div className="form-check m-3">
									<input
										className="form-check-input"
										type="checkbox"
										name="languages"
										value="PHP"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										PHP
									</label>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-check m-3">
									<input
										className="form-check-input"
										type="checkbox"
										name="languages"
										value="C#"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										C#
									</label>
								</div>
								<div className="form-check m-3">
									<input
										className="form-check-input"
										type="checkbox"
										name="languages"
										value="C++"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										C++
									</label>
								</div>
								<div className="form-check m-3">
									<input
										className="form-check-input"
										type="checkbox"
										name="languages"
										value="C"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										C
									</label>
								</div>
								<div className="form-check m-3">
									<input
										className="form-check-input"
										type="checkbox"
										name="languages"
										value="Typescript"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Typescript
									</label>
								</div>
							</div>
						</div>


						<br />
						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							<b>If other then describe:</b>
						</label>
						<br />
						<textarea>
						</textarea>
						<br/>
						<br />
						<input type="checkbox"/>
						Please read and acknowledge the following:<br/>

						I acknowledge that the information provided in this report will be kept confidential to the extent possible, and will only be disclosed to those involved in the investigation process.
						<br/>
						Information on how the report will be handled:
<br/>
						All reports of harassment will be taken seriously and investigated promptly.
						Only authorized personnel, such as HR representatives or designated investigators, will have access to the information provided in this report.
						The information will be used solely for the purpose of addressing and resolving the reported incident of harassment.
						Any disclosure of information will be in accordance with applicable laws and organizational policies.
						<br /><br /><br />
						<button type="submit" onClick={handleSubmit}>Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
