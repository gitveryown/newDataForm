'use client'
import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import './form.css'




export default function Form() { 
    let index = 0

    const {log} = console
    index++
    

// useState, set html input value and updates value as well
    const [input, setInput] = useState({first:'', last:'',phone:'', email:''})
    const [dataForm, setDataForm] = useState([])
    const [editData, setEditData] = useState(false)

   
    // want to use map to make a new array during each submit to the table

// function that handles updates on the state's object
    const handleOnChange = (e) => {
    const {name, value} = e.target
    setInput((previnput)=> ({...previnput, [name]:value})) 
  }
  
  

    const handleSubmit = (e) => {
        e.preventDefault()
        setDataForm([...dataForm, {input}])
        setInput({first:'', last:'', phone:'', email:''})
        
    }

    const deleteRow = (index) => {
        const total = [...dataForm]
        total.splice(index, 1)
        setDataForm(total)
        log("I deleted index", index )
        
    }

    const editRow = (index) => {
       
        const access = dataForm[index].input
        //how to set access data back to the input fields
        setInput(access)
        setEditData(true)
        /* When data is resubmitted, data should only reflect that index */
        

        log( "This row wants an edit:",index, access)
      
    }
    
    
  
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="names" className="title">Name:</label>
                <label> First Name </label>
                <input  name="first" type="text" id="name" required value={input.first} onChange={handleOnChange} />
                <label> Last Name</label>
                <input name="last" type="text" id="name" required value={input.last} onChange={handleOnChange} />

                <label className="title">Phone:</label>
                <input name="phone" type="tel" value={input.phone} required onChange={handleOnChange} placeholder="(123) 456-7890" maxLength="10" pattern="[0-9]*" />

                <label className="title">Email:</label>
                <input name="email" type="email" placeholder="ex:name@example.com" required value={input.email} onChange={handleOnChange} />
                <button className="submit" type="submit" > submit </button>
                
                
            </form>

            <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {
               dataForm.map((data, index) => {
                return(
                    <tr key={index}>
                        <td>{data.input.first}</td>
                        <td>{data.input.last}</td>
                        <td>{data.input.phone}</td>
                        <td>{data.input.email}</td>
                        <td><button onClick={()=>editRow(index)}>Edit</button> <button onClick={()=>deleteRow(index)}>Delete</button></td>


                    </tr>
                )
               }) 
            }
        </table>
            
       </>
    )
   
}



// need to create the submit logic on the form, focus on the handleSubmit function specific to react.
// once we get the data into an array we add that data to the table