import React from 'react'
import { useState } from 'react'

const Report = () => {
  return (
    <>
        <form>
          Name: <input type='text'/>
          <br/>
          <br/>
          Email: <input type='email'/>
          <br/>
          <br/>
          Phone number: <input type='text'/>
          <br/>
          <br/>
          Age: <input type='text'/>
          <br/>
          <br/>
          Gender: <select name="selectedOption" >
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="pnts">Prefer not to say</option>
                </select>
        </form>
        <div>hi</div>
      
    </>
  )
}

export default Report
