import React from 'react'
import { useState } from 'react'

const Report = () => {
  return (
    <>
        <form>
          Name: <input type='text' required/>
          <br/>
          <br/>
          Email: <input type='email' required/>
          <br/>
          <br/>
          Phone number: <input type='text' required/>
          <br/>
          <br/>
          Age: <input type='text' required/>
          <br/>
          <br/>
          Gender: <select name="selectedOption" required>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="pnts">Prefer not to say</option>
                </select>
          <br/>
          <br/>
          <h3>Incident detail:</h3>
          Date: <input type='date' required/>
          <br/>
          <br/>
          Location of the incident: <input type='text' required/>
          <br/>
          <br/>
          Description of the incident: <input type='text' required/>
          <br/>
          <br/>
          <h3>Types of Harrasment</h3>
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="vh"/>Verbal Harassment
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="nvh"/>Non-Verbal Harassment
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="ph"/>Physical Harassment
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="qpqh"/>Quid Pro Qua Harrassment 
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="hwh"/>Hostile Work Harassment
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="csh"/>Cyber Sexual Harassment
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="eh"/>Environmental  Harassment
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="dh"/>Discriminatory Harassment
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="o"/>Other<br/> 
          <input type='text'/>
          <br/>
          <br/>
          <h3>Witness information(if applicable):</h3>
          <br/>
          <br/>
          Name: <input type='text'/>
          <br/>
          <br/>
          Contact No:<input type='text'/>
          <br/>
          <br/>
          Additional Comment:<input type='text'/>
          <br/>
          <br/>
          <br/>
          <input type="checkbox" id="accept" name="accept" value="ack"/>Please read and acknowledge the following:

☑ I acknowledge that the information provided in this report will be kept confidential to the extent possible, and will only be disclosed to those involved in the investigation process.

Information on how the report will be handled:

All reports of harassment will be taken seriously and investigated promptly.
Only authorized personnel, such as HR representatives or designated investigators, will have access to the information provided in this report.
The information will be used solely for the purpose of addressing and resolving the reported incident of harassment.
Any disclosure of information will be in accordance with applicable laws and organizational policies.
        </form>
      
      
    </>
  )
}

export default Report
