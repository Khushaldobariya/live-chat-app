import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseLogin from "../Component/hooks/UseLogin";
import logo from "../assets/image/logo.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { laoding, login } = UseLogin();
  const handleLogin = async (e) => {
    e.preventDefault();
    login(userName, password);i
  };
  return (
    <>
      <div className="card  bg-slate-100 shadow-xl w-screen h-screen">
        <div
          className=" flex flex-col  justify-center p-8 h-screen w-1/3  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-50 m-auto  shadow-xl
"
        >
          <img src={logo} draggable={false} className="logo"/>
          <h1 className="text-center text-gray-600 text-3xl my-4">
            Login <span className="text-amber-300">Live Chat app</span>
          </h1>
          <form onSubmit={handleLogin}>
            <div>
              <label className="label">
                <span className="text-base label-text text-gray-800">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                class="input input-bordered w-full max-w-full  border rounded-full bg-white"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-gray-800">Password </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="input input-bordered w-full max-w-full border rounded-full bg-white"
                valuel={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to="/signup"
              className="hover:underline hover:text-amber-300 my-2 inline-block "
              href="#"
            >
              Create an account
            </Link>
            <div>
              <button
                className="btn btn-active btn-warning w-full"
                type="submit"
                disabled={laoding}
              >
                {" "}
                {laoding ? (
                  <span class="loading loading-spinner text-warning"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
