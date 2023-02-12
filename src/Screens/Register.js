import React, { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaUserCircle } from "react-icons/fa";


export default function Register() {
  const Navigate= useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async () => {
    if (name && email && dob && password) {
      const res = await axios.post("http://localhost:8000/signup", {
        name: name,
        email: email,
        dateOfBirth: dob,
        password: password,
      });

      if (res.data.message === "User Already exists") {
        Navigate("/login");
        alert(res.data.message);
      } else {
        localStorage.setItem("user", JSON.stringify(res.data.result));
        alert(res.data.message);
        Navigate("/");
      }
    } else {
      alert("Please Input all the fields");
    }
  };
  return (
    <>
    
      <div className="main">
      <div><Link className="btn m-5 border rounded bg-dark text-white fw-bold px-2 " to='/'>Home</Link></div>
        <Card
          className="mx-auto rounded"
          style={{ width: "25rem", height: "32rem", marginTop: "80px" }}
        >
          <Card.Title className="text-center mt-3 fw-bold fs-4">
            REGISTRATION
          </Card.Title>
          <hr className=" w-50 mx-auto"></hr>
          <FaUserCircle style={{ fontSize: "70px", marginLeft: "150px" }} />
          <Card.Body>
            <input
              className="mt-3 px-2  py-2 w-100 rounded"
              type="text"
              placeholder=" Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              className="mt-3 px-2  py-2 w-100 rounded"
              type="text"
              placeholder=" Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              className="mt-3 px-2  py-2 w-100 rounded"
              type="text"
              placeholder=" Date of Birth"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />
            <input
              className="mt-3 px-2  py-2 w-100 rounded"
              type="password"
              placeholder=" Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <p className="mt-3 fw-bold text-center">
              Already have an Account ? <Link to="/login">Login</Link>
            </p>
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
