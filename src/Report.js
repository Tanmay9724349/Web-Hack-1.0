// Filename - App.js

import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [userinfo, setUserInfo] = useState({
		languages: [],
		response: [],
	});
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phonenumber,setPhonenumber] = useState('');
  const [age,setAge] = useState('');
  const [gender,setGender] = useState('');
  const [incidate,setIncidate] = useState('');
  const [incilocation,setIncilocation] = useState('');
  const [incidescription,setIncidescription] = useState('');
  const [witnessname,setWitnessname] = useState('');
  const [witnesscontact,setWitnesscontact] = useState('');
  const [additionalinfo,setAdditionalinfo] = useState('');
  const [ack,setAck] = useState('false');

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
    console.log("",userinfo);
    console.log('',name);
        console.log('',email);
        console.log('',phonenumber);
        console.log('',age);
        console.log('',gender);
        console.log('',incidate);
        console.log('',incilocation);
        console.log('',incidescription);
        console.log('',witnessname);
        console.log('',witnesscontact);
        console.log('',additionalinfo);
        console.log('',ack);
  }

	return (
		<>
			<div className="container-fluid top ">
				<div className="container mt-5 pb-5 pt-5">
					<h3 className="form-head-contact-h3 ">
					</h3>

					<form>
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

						
            <br/>
            <br/>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
