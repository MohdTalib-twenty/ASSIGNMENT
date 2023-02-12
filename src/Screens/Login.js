import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaUserCircle } from "react-icons/fa";
export default function Login() {
    const Navigate= useNavigate();
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");

    const handleSubmit=async()=>{
        if(email && password){
            const res= await axios.post('http://localhost:8000/login',{
                email : email,
                password : password
            });
            console.log(res.data.token)
            if(res.data.message === "You are LoggedIn"){
                localStorage.setItem("user",JSON.stringify(res.data.user));
                alert(res.data.message);
                Navigate('/');
            }else{
                alert(res.data.message)
            }
        }else{
            alert("Input all the fields");
        }
    }

  return (
    <>
      <div className="main ">
      <div ><Link className="btn border rounded bg-dark text-white fw-bold px-2 m-5" to='/'>Home</Link></div>
        <Card
          className="mx-auto rounded"
          style={{ width: "25rem", height: "25rem", marginTop: "170px" }}
        >
          <Card.Title className="text-center mt-3 fw-bold fs-4">
            LOGIN NOW
          </Card.Title>
          <hr className=" w-50 mx-auto"></hr>
          <FaUserCircle style={{ fontSize: "70px", marginLeft: "150px" }} />
          <Card.Body>
           
            <input
              className="mt-3 px-2  py-2 w-100 rounded"
              type="text"
              placeholder=" Email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
            <input
              className="mt-3 px-2  py-2 w-100 rounded"
              type="text"
              placeholder=" Password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
            <p className="mt-3 fw-bold text-center">New User? <Link to='/signup'>Signup</Link></p>
            <Button
              className="mt-2 fw-bold rounded px-5"
              style={{
                marginLeft: "95px",
                backgroundColor: "black",
                text: "white",
              }}
              variant="primary"
              onClick={handleSubmit}
            >
              Signup
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
