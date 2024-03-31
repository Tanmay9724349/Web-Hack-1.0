// Filename - App.js

import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
	const [Harassment, setHarassment] = useState({
		toh: []
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
	const [other,setOther] = useState('');

	const handleChange = (e) => {
		// Destructuring
		const { value, checked } = e.target;
		const { toh } = Harassment;

		// Case 1 : The user checks the box
		if (checked) {
			setHarassment({
				toh: [...toh, value],
			});
		}

		// Case 2 : The user unchecks the box
		else {
			setHarassment({
				toh: toh.filter(
					(e) => e !== value
				)
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("", Harassment);
		console.log("", name);
		console.log('', email);
		console.log('', phonenumber);
		console.log('', age);
		console.log('', gender);
		console.log('', incidate);
		console.log('', incilocation);
		console.log('', incidescription);
		console.log('', other);
		console.log('', ack);
	}

	return (
		<>
			<div className="container-fluid top ">
				<div className="container  pb-5 pt-5">
					<h3 className="form-head-contact-h3 ">
					</h3>

					<form>
						<Form.Group>
							<Form.Label>Enter your full name:</Form.Label>
							<input class="form-control" type="text"
								placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label>Enter your email address:</Form.Label>
							<input class="form-control" type="email"
								placeholder="Enter your your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label>Enter your Contact Number:</Form.Label>
							<input class="form-control" type="number" placeholder="Enter your Number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label>Enter your age:</Form.Label>
							<input class="form-control" type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)}/>
						</Form.Group>
						<br />
						
						Gender: <select name="selectedOption" class="form-control" required value={gender} onChange={(e) => setGender(e.target.value)}> 
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="pnts">Prefer not to say</option>
          </select>
		  <br/>
		  <br/>
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
						<input class="form-control" type="date" value={incidate} onChange={(e) => setIncidate(e.target.value)}/>
						<br />
						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							Location:

						</label>
						<br />

						<textarea value={incilocation} onChange={(e) => setIncilocation(e.target.value)}></textarea>
						<br />
						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							Description of Harassment:
						</label>
						<br />
						<textarea value={incidescription} onChange={(e) => setIncidescription(e.target.value)}></textarea>

						<br />



						<label
							className="form-check-label"
							htmlFor="flexCheckDefault"
						>
							<b>Type Of Harassment:</b>
						</label>


						<div className="row">
							<div className="col-md-6">
								<div className="form-check m-3">
									<input className="form-check-input form-control"
										type="checkbox"
										name="toh"
										value="Verbal Harassment"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Verbal Harassment
									</label>
								</div>
								<div className="form-check m-3">
									<input className="form-check-input form-control"
										type="checkbox"
										name="toh"
										value="Non-Verbal Harassment"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Non-Verbal Harassment
									</label>
								</div>
								<div className="form-check m-3">
									<input className="form-check-input form-control"
										type="checkbox"
										name="toh"
										value="Physical Harassment"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Physical Harassment
									</label>
								</div>
								<div className="form-check m-3">
									<input className="form-check-input form-control"
										type="checkbox"
										name="toh"
										value="Quid Pro Quo Harassment"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Quid Pro Quo Harassment
									</label>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-check m-3">
									<input className="form-check-input form-control"
										type="checkbox"
										name="toh"
										value="Hostile Work Harassment"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Hostile Work Harassment
									</label>
								</div>
								<div className="form-check m-3">
									<input className="form-check-input form-control"
										type="checkbox"
										name="toh"
										value="Cyber Sexual Harassment"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Cyber Sexual Harassment
									</label>
								</div>
								<div className="form-check m-3">
									<input className="form-check-input form-control"
										type="checkbox"
										name="toh"
										value="Enviromental Harassment"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Enviromental Harassment
									</label>
								</div>
								<div className="form-check m-3">
									<input className="form-check-input form-control"
										type="checkbox"
										name="toh"
										value="Discriminatory Harassment"
										id="flexCheckDefault"
										onChange={
											handleChange
										}
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Discriminatory Harassment
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
						<textarea value={other} onChange={(e) => setOther(e.target.value)}>
						</textarea>
						<br />
						<br />
						<input  type="checkbox" value={ack} onChange={(e) => setAck(e.target.value)}/>
						Please read and acknowledge the following:<br />

						I acknowledge that the information provided in this report will be kept confidential to the extent possible, and will only be disclosed to those involved in the investigation process.
						<br />
						Information on how the report will be handled:
						<br />
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
