import React from "react";
import { login } from "../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      login(user.username, user.password)
        .then((response) => {
          if (response.status === 200) {
            navigate(`/dashboard/`);
          } else {
            alert("Invalid username or password");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="log-in__main" id="log-in__main">
      <div className="log-in__darken">
        <div className="log-in__darken-gradient">
          <div className="log-in__center-container">
            <div className="log-in__container-block">
              <div className="log-in__rectangle--log-in">
                <h2>Welcome Back</h2>

                <form
                  className="form-content"
                  method="post"
                  id="loginForm"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    id="log-in__form-username"
                    placeholder="Username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="log-in__form-password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    id="log-in__submit-button"
                    type="submit"
                    className="log-in__submit-button highlight__shadow"
                  >
                    Log in
                  </button>

                  <br />
                  <small>
                    By signing up, you agree to our{" "}
                    <span className="log-in__highlight-text">
                      Privacy Policy
                    </span>
                    ,{" "}
                    <span className="log-in__highlight-text">
                      Cookie Policy
                    </span>
                    , and
                    <span className="log-in__highlight-text">
                      Member Agreement
                    </span>
                    .
                  </small>
                </form>
                <br />
                <h3>
                  New user?{" "}
                  <a href="register.html">
                    <span className="log-in__highlight-text">
                      Register here
                    </span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
