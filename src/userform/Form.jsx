'use client'
import { useState } from "react";
import './form.css'


export default function Form() { 

    const {log} = console

// useState, set html input value and updates value as well
    const [input, setInput] = useState({first:'', last:'',phone:'', email:''})
    const [dataForm, setDataForm] = useState([])
    // const [readOnly, setReadOnly] = useState("")

   
    // want to use map to make a new array during each submit to the table

// function that handles updates on the state's object
    const handleOnChange = (e) => {
    const {name, value} = e.target
    setInput((previnput)=> ({...previnput, [name]:value})) 
  }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        setDataForm([...dataForm, {input}])
        // log(input,'data we entered' )
        // log('Object data array',dataForm)
    }

    const deleteRow = (index) => {
        const total = [...dataForm]
        total.splice(index, 1)
        setDataForm(total)
        log(input, "this row wants to be deleted!")
    }

    const editRow = (index) => {
        log(index, "this row wants an edit")
    }
    
  
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="names" className="title">Name:</label>
                <label> First Name </label>
                <input  name="first" type="text" id="name" value={input.first} onChange={handleOnChange} />
                <label> Last Name</label>
                <input name="last" type="text" id="name" value={input.last} onChange={handleOnChange} />

                <label className="title">Phone:</label>
                <input name="phone" type="tel" value={input.phone} onChange={handleOnChange} placeholder="(123) 456-7890" maxLength={10} pattern="[0-9]*" />

                <label className="title">Email:</label>
                <input name="email" type="email" placeholder="ex:name@example.com" value={input.email} onChange={handleOnChange} />
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
                        <td><button onClick={editRow}>Edit</button> <button onClick={deleteRow}>Delete</button></td>


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