import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingToggleAction, signUpAction } from "../../../store/actions/AuthActions";
import Loader from "../Loader/Loader";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const errorMessage = useSelector(state => state.auth.errorMessage);
  const successMessage = useSelector(state => state.auth.successMessage);
  const showLoading = useSelector(state => state.auth.showLoading);
  console.log(errorMessage,'error')
  const dispatch = useDispatch();

  const emailChangehandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangehandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    const loginData = {
      email,
      password,
    };

    setErrors(errorObj);
    if (!error) {
      console.log(loginData);
      dispatch(LoadingToggleAction(true));
      dispatch(signUpAction(email,password))
    }
    console.log(errorMessage,"error")
  };

  return (
    <div className="flex justify-center my-3">
      {showLoading && <Loader /> }
      <div>
        <h1 className="text-2xl font-extrabold">SignUp</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
           {errorMessage && <div className="text-red-500">{errorMessage}</div>}
           {successMessage && <div className="text-green-500">{successMessage}</div>}
            <div>
              <label>Email</label>
            </div>
            <div>
              <input
                type="text"
                value={email}
                className="border border-gray-600 p-1 w-full"
                name="email"
                onChange={emailChangehandler}
              />
            </div>
          </div>
          <div>{errors.email && 
          <div>{errors.email}</div>
          }</div>
          <div>
            <div>
              <label>Password</label>
            </div>
            <div>
              <input
                type="password"
                value={password}
                className="border border-gray-600 p-1 w-full"
                name="password"
                onChange={passwordChangehandler}
              />
            </div>
          </div>
          <div>{errors.password && 
          <div>{errors.password}</div>
          }</div>
          <div className="my-3">
            <button type="submit" className="bg-green-700 text-white px-3 py-2">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
