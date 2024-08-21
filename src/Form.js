import React from 'react';
import './Form.css'
function Form()
{
    return(
        <div>
            <h1>Employee Form</h1>
            <div className='Container'>
            <form className="form-grid">
             <label>
              First Name:
              <input type="text" name="fname" placeholder='Enter your First Name' />
             </label>
             <label>
              Middle Name:
              <input type="text" name="mname" placeholder='Enter your Middle Name' />
             </label>
             <label>
              Last Name:
              <input type="text" name="lname" placeholder='Enter your Last Name'  />
             </label> 
             <label>
              Birth date:
              <input type="text" name="date" placeholder='Enter your DOB' />
             </label>
             <label>
              Email:
              <input type="email" name="mail" placeholder='Enter your email' />
             </label>
             <label>
              Phone Number:
              <input type="email" name="mobile" placeholder='Enter your Mobile' />
             </label>
             <label>
              Gender:
              <select>
                <option>Choose Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
             </label>
             <label>
              Start Time:
              <input type="time" name="Stime"  />
             </label>
             <label>
              End Time:
              <input type="time" name="Etime"  />
             </label>
             <label>
              Position:
              <input type="text" name="position" placeholder='Enter your job position' />
             </label>
             <label>
               Select Team:
              <select>
                <option>Select</option>
                <option>Sharks</option>
                <option>Wales</option>
              </select>
             </label><label>
              Select Designation:
              <select>
                <option>Select</option>
                <option>Product Engineer</option>
                <option>It Consultant</option>
              </select>
             </label>
             <label>
                Billable Hours:
                <input type='number' name='Hours' placeholder=''Enter your Bilable hours></input>
             </label>
             <label>
                is Billable:
                <input type='checkbox'></input>
             </label>
             <div className='button'>
                <button>Submit</button>
             </div>
            </form>
            </div>
        </div>
    )
}
export default Form;