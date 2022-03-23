import React from "react";
import "../SignupPages/Signup.css";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container bg-white">
      <div className="form-main">
        <div className="form-item">
          <div className="text-xxl align-center subhead fg-dark">Login</div>
          <hr className="mb" />

          <label htmlFor="login-email-id" className="text-md">
            Email ID
            <span className="fg-danger"> *</span>
          </label>
          <input
            type={"text"}
            name="login-email-id"
            id="login-email-id"
            className="input-field"
            placeholder="Enter your email id"
            // onChange={(e) => addPersonalDetail(e, "first")}
            required
          />

          <label htmlFor="login-password" className="text-md">
            Password
            <span className="fg-danger"> *</span>
          </label>
          <input
            type={"password"}
            name="login-password"
            id="login-password"
            className="input-field"
            placeholder="Enter your password"
            // onChange={(e) => addPersonalDetail(e, "last")}
            required
          />
          <div className="text-xs fg-black extra-option">
            <label className="flex-box">
              <input type={"checkbox"} name="remember-me" id="remember-me" />
              Remember me
            </label>

            <span className="fg-primary">Forgot password?</span>
          </div>
          <input
            // disabled={!validateForm()}
            type={"submit"}
            name="submit-btn"
            id="submit-btns"
            className={"input-field btn-bg-primary fg-white"}
            value={"Login"}
            // onClick={() => {
            //   // setPage((prev) => prev + 1);
            // }}
            required
          />
          <div className="text-xs fg-black extra-option">
            <span className="fg-grey">
              Want to create new Account?
              <Link to={"/signup"}>
                <span className="fg-primary fg-bold"> Register Now</span>
              </Link>
            </span>
          </div>
        </div>

        <div className="form-item ">
          <div className="sub-item fg-white bg-secondary">
            <div>
              <span className="text-xxl nav-bar-title">Startup</span>
              <span className="text-xxl nav-bar-title ">Dwaar</span>
              <p>Have No fear we got everything here</p>
            </div>

            <p>Your one Stop Platform for all the Entrepreuner Needs</p>
            <p>
              Join one of the Fastest Growing Community
              <button
                // disabled={!validateForm()}
                name="submit-btn"
                id="submit-btns"
                className={"btn-bg-primary fg-white"}

                // onClick={() => {
                //   // setPage((prev) => prev + 1);
                // }}
              >
                Join us
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
