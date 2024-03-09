import React from "react";
import { login } from "../api/auth";

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    if (username && password) {
      login(username, password);
    }
  };

  return (
    <div class="log-in__main" id="log-in__main">
      <div class="log-in__darken">
        <div class="log-in__darken-gradient">
          <div class="log-in__center-container">
            <div class="log-in__container-block">
              <div class="log-in__rectangle--log-in">
                <h2>Welcome Back</h2>
                <form
                  class="form-content"
                  method="post"
                  action="index.html"
                  id="loginForm"
                >
                  <input
                    type="text"
                    id="log-in__form-username"
                    placeholder="Username"
                    name="username"
                    required
                  />
                  <input
                    type="text"
                    id="log-in__form-password"
                    placeholder="Password"
                    name="password"
                    required
                  />

                  <button
                    id="log-in__submit-button"
                    type="submit"
                    class="log-in__submit-button highlight__shadow"
                    onSubmit={handleSubmit}
                  >
                    Log in
                  </button>

                  <br />
                  <small>
                    By signing up, you agree to our{" "}
                    <span class="log-in__highlight-text">Privacy Policy</span>,{" "}
                    <span class="log-in__highlight-text">Cookie Policy</span>,
                    and
                    <span class="log-in__highlight-text">Member Agreement</span>
                    .
                  </small>
                </form>
                <br />
                <h3>
                  New user?{" "}
                  <a href="register.html">
                    <span class="log-in__highlight-text">Register here</span>
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
