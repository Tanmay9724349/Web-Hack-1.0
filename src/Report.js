import  {useState} from 'react';

export default function Report()
{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [incidate,setIncidate] = useState('');
    const [incilocation,setIncilocation] = useState('');
    const [incidescription,setIncidescription] = useState('');
    const [incitoh,setIncitoh] = useState(new Array(toh.length).fill(false));
    const [witnessname,setWitnessname] = useState('');
    const [witnesscontact,setWitnesscontact] = useState('');
    const [additionalinfo,setAdditionalinfo] = useState('');
    const [ack,setAck] = useState('false');
    const [total,setTotal] =useState(0);
    const tohc = (position) => {
      const updatedincitoh = checkedState.map((item,index === position ? !item : item));
      setIncitoh(updatedincitoh);
      
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('',name);
        console.log('',email);
        console.log('',phonenumber);
        console.log('',age);
        console.log('',gender);
        console.log('',incidate);
        console.log('',incilocation);
        console.log('',incidescription);
        console.log('',incitoh);
        console.log('',witnessname);
        console.log('',witnesscontact);
        console.log('',additionalinfo);
        console.log('',ack);
        alert("Report saved");
    };

    return (
        <form>
          Name: <input type='text' value={name} onChange={(e) => 
setName(e.target.value)} required />
          <br />
          <br />
          Email: <input type='email' value={email} onChange={(e) => 
setEmail(e.target.value)} required />
          <br />
          <br />
          Phone number: <input type='text' value={phonenumber} onChange={(e) => 
setPhonenumber(e.target.value)} required />
          <br />
          <br />
          Age: <input type='text' value={age} onChange={(e) => 
setAge(e.target.value)} required />
          <br />
          <br />
          Gender: <select name="selectedOption" value={gender} onChange={(e) => 
setGender(e.target.value)} required>
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="pnts">Prefer not to say</option>
          </select>
          <br />
          <br />
          <h3>Incident detail:</h3>
          Date: <input type='date' value={incidate} onChange={(e) => 
setIncidate(e.target.value)} required />
          <br />
          <br />
          Location of the incident: <input type='text' value={incilocation} onChange={(e) => 
setIncilocation(e.target.value)} required />
          <br />
          <br />
          Description of the incident: <input type='text' value={incidescription} onChange={(e) => 
setIncidescription(e.target.value)} required />
          <br />
          <br />
          <h3>Types of Harrasment</h3>
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="vh" />Verbal Harassment
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="nvh" />Non-Verbal Harassment
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="ph" />Physical Harassment
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="qpqh" />Quid Pro Qua Harrassment
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="hwh" />Hostile Work Harassment
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="csh" />Cyber Sexual Harassment
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="eh" />Environmental  Harassment
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="dh" />Discriminatory Harassment
          <br />
          <br />
          <input type="checkbox" id="accept" name="accept" value="o" />Other<br />
          <input type='text' />
          <br />
          <br />
          <h3>Witness information(if applicable):</h3>
          <br />
          <br />
          Name: <input type='text' />
          <br />
          <br />
          Contact No:<input type='text' />
          <br />
          <br />
          Additional Comment:<input type='text' />
          <br />
          <br />
          <br />
          <input type="checkbox" id="ack" name="ack" value="ack" />Please read and acknowledge the following:
    
          <br/>☑ I acknowledge that the information provided in this report will be kept confidential to the extent possible, and will only be disclosed to those involved in the investigation process.
    
          Information on how the report will be handled:
    
          All reports of harassment will be taken seriously and investigated promptly.
          Only authorized personnel, such as HR representatives or designated investigators, will have access to the information provided in this report.
          The information will be used solely for the purpose of addressing and resolving the reported incident of harassment.
          Any disclosure of information will be in accordance with applicable laws and organizational policies. 
          <br/>
          <br/>
          <button type='submit' onClick={handleSubmit}> Submit </button>
    
        </form>
        )
}