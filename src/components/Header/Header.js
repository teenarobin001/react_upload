import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../store/actions/AuthActions";

const Header = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isAuthenticate = useSelector((state) => state.auth.auth.idToken);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAction(navigate));
  };
  return (
    <div>
      <div className="bg-gray-500 text-white px-2 py-2 flex justify-content items-center ">
        <h2 className="font-bold text-lg mr-4">React Router</h2>
        <div>
          {!isAuthenticate && (
            <>
              <Link to="/signup" className="px-2">
                SignUp
              </Link>
              <Link to="/login" className="px-2">
                Login
              </Link>
            </>
          )}
          {isAuthenticate && (
            <>
              <Link to="/" className="px-2">
                Home
              </Link>
              <Link to="/posts/" className="px-2">
                Posts
              </Link>
              <button onClick={onLogout} type="" className="px-2">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
