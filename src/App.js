import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import CreatePost from "./components/Posts/CreatePost";
import Posts from "./components/Posts/Posts";

function App() {
  const isAuthenticate = useSelector((state) => state.auth.auth.idToken);

  let routes = (
    <Routes> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
    </Routes>
  );

  if(isAuthenticate) {
    routes = (
      <Routes>
        <Route path="/"   element={<Home />} exact/>
        <Route path='/posts/*'  element={<Posts />} exact/> 
        <Route path='/create-posts'  element={<CreatePost />} /> 
         
       </Routes>
    )
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container mx-auto px-4">
          {routes}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
