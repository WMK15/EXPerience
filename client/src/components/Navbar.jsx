import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

import { handleAuthenticated } from "../api/auth";

function ReactNav() {
  // Render the appropriate navbar based on authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  //   useEffect(() => {
  //     try {
  //       handleAuthenticated().then((response) => {
  //         if (response.status === 200) {
  //           setIsAuthenticated(true);
  //         } else {
  //           setIsAuthenticated(false);
  //         }
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //     }
  //   }, []);

  return (
    <div className="navbarr">
      <Navbar id="navbar" expand="xl">
        <Container>
          <Navbar.Brand>
            <div className="dynamicNav">
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <img src={logo} height={"70rem"} />
                EXPerience
              </Link>
            </div>
          </Navbar.Brand>

          <Nav>
            {isAuthenticated ? (
              <Nav.Link className="navLink">
                <div className="dynamicNav">
                  <Link style={{ color: "white", textDecoration: "none" }}>
                    Profile
                  </Link>
                </div>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <div className="dynamicNav">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/login"
                  >
                    Sign In
                  </Link>
                </div>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default ReactNav;
