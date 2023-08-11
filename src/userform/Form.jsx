'use client'
import { useState } from "react";
import './form.css'




export default function Form() { 
    let index = 0

    const {log} = console
    index++
    

// useState, set html input value and updates value as well
    const [input, setInput] = useState({first:'', last:'',phone:'', email:''})
    const [dataForm, setDataForm] = useState([])
   
    const [editIndex, setEditIndex] = useState(-1)
    



   
    // want to use arrray.map to make a NEW array during each submit to the table

// function that handles updates on the state's object
    const handleOnChange = (e) => {
    const {name, value} = e.target
    // e.target.name && e.target.value

    setInput((previnput)=> ({...previnput, [name]:value})) 
  }
  
  

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editIndex !== -1){
        // If editIndex is not -1, update existing entry
        const updatedData = [... dataForm]
        updatedData[editIndex] = { input }
        setDataForm(updatedData)
        setEditIndex(-1) // Reset editIndex
        } else {
        setDataForm( [...dataForm, { input }]) 
        setInput ({ first: '', last: '', phone:'', email: '' })
        }
    }


    const deleteRow = (index) => {

        const row = [...dataForm]
        row.splice(index, 1)/* only mutuating the NEW array from table 
        not the Original from form */
        
        setDataForm(row)
        log("I deleted index", index )
        
    }

    const editRow = (index) => {
       
        const access = dataForm[index].input
        
        
        
        setInput(access) //how to set access data back to the input fields

        setEditIndex(index) // set the index being edited

        log( "This row wants an edit:",index, access, edit)
      
    }
    
    // option: if edit button is clicked return data back to index
    // option: if editdata [index] isnt equal to dataform index return editdata back to index 

  
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