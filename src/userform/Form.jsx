"use client";
import { useState } from "react";
import "./form.css";

export default function Form() {
  const { log } = console;

  const [input, setInput] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
  });
  const [dataForm, setDataForm] = useState([]);
  //   const [inputError, setInputError] = useState(null);

  const [editIndex, setEditIndex] = useState(-1);

  const [noDuplicate, setNoDuplicate] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput((previnput) => ({ ...previnput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicateEmail = dataForm.some(
      (contact) => contact.input.email === input.email
    );

    if (isDuplicateEmail) {
      alert("This email already exist, please edit or delete entry!");
      setNoDuplicate(false)
      return false
      ;
    }
    if (editIndex !== -1) {
      // If editIndex is not -1, update existing entry
      const updatedData = [...dataForm];
      updatedData[editIndex] = { input };
      setDataForm(updatedData);
      setEditIndex(-1); // Reset editIndex
    } else {
      setDataForm([...dataForm, { input }]);
      setInput({ first: "", last: "", phone: "", email: "" });
      setNoDuplicate(true);
      return true
    }
  };

  const deleteRow = (index) => {
    const row = [...dataForm];
    row.splice(index, 1); /* only mutuating the NEW array from table 
        not the Original from form */

    setDataForm(row);
    log("I deleted index", index);
  };

  const editRow = (index) => {
    const access = dataForm[index].input;

    setInput(access); //how to set access data back to the input fields

    setEditIndex(index); // set the index being edited

    log("This row wants an edit:", index, access);
  };

  // option: if edit button is clicked return data back to index
  // option: if editdata [index] isnt equal to dataform index return editdata back to index

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="names" className="title">
          Name:
        </label> */}
        <input
          label="Name"
          name="first"
          placeholder="First Name"
          type="text"
          title="Please enter a 3 character min"
          required
          pattern="^[A-Za-z0-9]{3,16}$"
          value={input.first}
          onChange={handleOnChange}
        />
        {/* <span>Minimum at least 3-16 characters</span> */}

        <input
          name="last"
          placeholder="Last Name"
          type="text"
          pattern="^[A-Za-z0-9]{3,16}$"
          required
          title="Please enter a 3 characters minimum"
          value={input.last}
          onChange={handleOnChange}
        />

        <label className="title">Phone:</label>
        <input
          name="phone"
          type="tel"
          value={input.phone}
          required
          title="Please enter a 10 digit minimum"
          errormessage=""
          onChange={handleOnChange}
          placeholder="(123) 456-7890"
          maxLength="10"
          pattern="[0-9]{10}"
        />
        {/* <span>Invalid Phone Number</span><br></br> */}
        <label className="title">Email:</label>
        <input
          name="email"
          type="email"
          placeholder="ex:name@example.com"
          required
          value={input.email}
          onChange={handleOnChange}
        />

        <button className="submit" type="submit" disable={!noDuplicate}>
          submit
        </button>
        <br />
        {!noDuplicate && (
          <span style={{ color: "red" }}>
            Duplicate email entry. Please use a different email address.
          </span>
        )}
      </form>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataForm.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.input.first}</td>
                <td>{data.input.last}</td>
                <td>{data.input.phone}</td>
                <td>{data.input.email}</td>
                <td>
                  <div>
                    <button onClick={() => editRow(index)}>Edit</button>{" "}
                    <button onClick={() => deleteRow(index)}>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// need to create the submit logic on the form, focus on the handleSubmit function specific to react.
// once we get the data into an array we add that data to the table
// if email doesnt equal dataform email array push it to dataform
