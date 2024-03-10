import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";

import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
import person4 from "../assets/images/person_4.jpg";
import person5 from "../assets/images/person_5.jpg";
import person6 from "../assets/images/person_6.jpg";
import person7 from "../assets/images/person_7.jpg";
import person8 from "../assets/images/dog_happy.jpg";
import dashboardImage from "../assets/images/dashboard.jpg";

export default function Home() {
  return (
    <div className="landing__main">
      <div className="landing__panel-one">
        <div className="general__darken-gradient-overlay">
          <div className="general__darken-overlay">
            <div className="landing__center">
              <div className="landing__content">
                <h1>EXPerience Productivity!</h1>
                <br />
                <div className="glass">
                  <h2>Finally, a productivity app you'll keep using</h2>
                </div>

                <br />
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#1d2522",
                      borderColor: "#1d2522",
                    }}
                    onmouseover="this.originalColor = this.style.backgroundColor; this.style.backgroundColor='#ffa500';"
                    onmouseout="this.style.backgroundColor=this.originalColor;"
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing__panel-two">
        <br />
        <h1>Here are the students who trust us</h1>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="card"
                style={{ width: "100%", position: "relative" }}
              >
                <img className="card-img-top" src={person1} alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Jane Doe</h5>
                  <p className="card-text">
                    Great game! I got inspired to study more because of the dog.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{ width: "100%", position: "relative" }}
              >
                <img className="card-img-top" src={person2} alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Mohamed Rasul</h5>
                  <p className="card-text">
                    This has changed and improved me. I got more motivated.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{ width: "100%", position: "relative" }}
              >
                <img className="card-img-top" src={person3} alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Bob Malik</h5>
                  <p className="card-text">
                    Inspiring and beautiful design. This is a great student
                    project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{ width: "100%", position: "relative" }}
              >
                <img className="card-img-top" src={person4} alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Muffazar Nabih</h5>
                  <p className="card-text">
                    Absolutely wonderful; This has helped me code multiple
                    internship projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="card"
                style={{ width: "100%", position: "relative" }}
              >
                <img className="card-img-top" src={person5} alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Emily Real</h5>
                  <p className="card-text">
                    Great game! I got inspired to study more because of the dog.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{ width: "100%", position: "relative" }}
              >
                <img className="card-img-top" src={person6} alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Badr al-Din</h5>
                  <p className="card-text">
                    This has changed and improved me. I got more motivated.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{ width: "100%", position: "relative" }}
              >
                <img className="card-img-top" src={person7} alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Aladeen Hussein</h5>
                  <p className="card-text">
                    Inspiring and beautiful design. This is a great student
                    project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{ width: "100%", position: "relative" }}
              >
                <img className="card-img-top" src={person8} alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Habibi Fatima</h5>
                  <p className="card-text">
                    I am grateful to this game for allowing me to help fellow
                    students focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing__panel-three">
        <br />
        <h1>Would you like to work with us?</h1>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-lg-4 px-1 mx-0">
              <div
                className="card"
                style={{
                  width: "100%",
                  position: "relative",
                  height: "29.5vh",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Why work with us?</h5>
                  <ul className="card-text">
                    <li>
                      Our student dashboard a trusty sidekick for your
                      productivity needs. It is designed to make your studying
                      much more enjoyable and managable in the UK. We use our
                      user-friendly interface to appeal to students.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "100%",
                  position: "relative",
                  height: "1vh",
                  visibility: "hidden",
                }}
              ></div>

              <div
                className="card"
                style={{
                  width: "100%",
                  position: "relative",
                  height: "29.5vh",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">How do we keep you hooked?</h5>
                  <ul className="card-text">
                    <li>
                      Using the appeal of a 2D dog, we are able to keep students
                      hooked in and in a calming manner. The corgi appeals to
                      our users and gets them more invested in keeping up their
                      progress.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 px-1 mx-0">
              <div
                className="card"
                style={{ width: "100%", position: "relative", height: "60vh" }}
              >
                <img
                  src={dashboardImage}
                  alt="Card image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "2px solid #1d2522",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <footer
            className="footer py-3 text-white"
            style={{ backgroundColor: "#1d2522" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5>EXPerience</h5>
                  <p>A 2024 startup designed at King's College London.</p>
                </div>
                <div className="col-md-6">
                  <h5>Shortcuts</h5>
                  <ul className="list-group">
                    <li>
                      <div className="dynamicNav">
                        <Link to="/">Home</Link>
                      </div>
                    </li>
                    <li>
                      <div className="dynamicNav">
                        <Link to="/dashboard/WMK15">Dashboard</Link>
                      </div>
                    </li>
                    <li>
                      <div className="dynamicNav">
                        <Link to="/login">Sign In</Link>
                      </div>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 text-center">
                  <p>
                    &copy; 2024 EXPerience. All rights reserved by Joel, Waseef,
                    Paul, Aman, Haroon.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
