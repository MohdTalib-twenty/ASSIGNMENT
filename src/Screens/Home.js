import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import {RiUser6Line} from 'react-icons/ri'
import Commontable from "../Component/Commontable";
export default function Home() {
  const auth =JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Welcome</Navbar.Brand>
          {auth ? (
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <RiUser6Line style={{ fontSize: "30px" }} /> &nbsp;<span >Hello,{auth.name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item href='/' onClick={()=>localStorage.clear()}>LogOut</Dropdown.Item>
          
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Nav className="ms-auto">
                <Nav.Link
                  className="text-white fw-bold border rounded px-3 mx-4"
                  href="/login"
                >
                  LogIn
                </Nav.Link>
                <Nav.Link
                  className="text-white fw-bold border rounded px-3"
                  href="/signup"
                >
                  SignUp
                </Nav.Link>
              </Nav>

              
            </>
          )}
        </Container>
      </Navbar>
      

      {auth ? <Commontable/>
        :
      <h4 className=" text-center mt-5">Please Login!</h4>
     }


    </>
  );
}
