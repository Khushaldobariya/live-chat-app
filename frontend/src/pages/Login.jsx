import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseLogin from "../Component/hooks/UseLogin";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { laoding, login } = UseLogin();
  const handleLogin = async (e) => {
    e.preventDefault();
    login(userName, password);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-96 mx-auto">
        <div
          className="p-8 h-full w-full bg-gray-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-50
"
        >
          <h1 className="text-center text-gray-300 text-3xl">
            Login <span className="text-green-500">Live Chat app</span>
          </h1>
          <form onSubmit={handleLogin}>
            <div>
              <label className="label">
                <span className="text-base label-text text-white">
                  User Name
                </span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                class="input input-bordered w-full h-10"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-white">
                  Password{" "}
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="input input-bordered w-full h-10"
                valuel={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to="/signup"
              className="hover:underline hover:text-green-300 my-2 inline-block text-white "
              href="#"
            >
              Create an account
            </Link>
            <div>
              <button
                className="btn btn-active btn-accent w-full"
                type="submit"
                disabled={laoding}
              >
                {" "}
                {laoding ? (
                  <span class="loading loading-spinner text-accent"></span>
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
