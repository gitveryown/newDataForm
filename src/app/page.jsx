import './page.css'
import Form from "@/userform/Form";

export default function Home() {


  // const inputs = [
  //   {
  //     id: 1,
  //     name: "first",
  //     type: "text",
  //     placeholder: "First Name",
  //     errorMessage:
  //       "Name should be 3-16 characters and shouldn't include any special character!",
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     required: true,
  //   },
  //   {
  //     id: 2,
  //     name: "email",
  //     type: "email",
  //     placeholder: "Email",
  //     errorMessage: "It should be a valid email address!",
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: "last",
  //     type: "text",
  //     require: true,
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     errorMessage:
  //       "Name should be 3-16 characters and shouldn't include any special character!",
  //     placeholder: "Last Name",
      
  //   },
  //   {
  //     id: 4,
  //     name: "phone",
  //     type: "tel",
  //     placeholder: "Enter Phone",
  //     errorMessage:
  //       "Enter a Valid Phone Number",
  //     pattern: `[0-9]{10}`,
  //     required: true,
  //   },
    
  // ];

  return (
    <div className="app">
     
      <Form />
      
    </div>
  );
}
