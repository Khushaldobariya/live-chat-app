import React, { useState } from "react";
import GenderCheckBox from "../Component/GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../Component/hooks/UseSignup";
import logo from "../assets/image/logo.png";


const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { lodaing, signUp } = useSignup();

  const handleRadioButton = (value) => {
    setInput({
      ...input,
      gender: value,
    });
  };
  const handeleSubmit = async (e) => {
    e.preventDefault();
    await signUp(input);
  };
  return (
    <>
      <div className="card  bg-slate-100 shadow-xl w-screen h-screen">
        <div className="flex flex-col  justify-center p-8 h-screen w-1/3  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-50 m-auto  shadow-xl">
        <img src={logo} draggable={false} className="logo"/>

          <h1 className="text-center text-gray-300 text-3xl my-4">
            Sign Up <span className="text-amber-300">Live Chat app</span>
          </h1>
          <form onSubmit={handeleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text text-gray-800">
                  First Name
                </span>
              </label>
              <input
                type="text"
                placeholder="first Name"
                class="input input-bordered w-full max-w-full  border rounded-full bg-white"
                value={input.firstName}
                onChange={(e) =>
                  setInput({ ...input, firstName: e.target.value.trim() })
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-gray-800
                ">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                placeholder="last Name"
                class="input input-bordered w-full max-w-full  border rounded-full bg-white"
                value={input.userName}
                onChange={(e) =>
                  setInput({ ...input, userName: e.target.value.trim() })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-gray-800
                ">
                  Password{" "}
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="input input-bordered w-full max-w-full  border rounded-full bg-white"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value.trim() })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-gray-800
                ">
                  Confrim Password{" "}
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="input input-bordered w-full max-w-full  border rounded-full bg-white"
                value={input.confirmPassword}
                onChange={(e) =>
                  setInput({ ...input, confirmPassword: e.target.value.trim() })
                }
              />
            </div>
            <GenderCheckBox
              gender={input.gender}
              onChange={handleRadioButton}
            />
            <Link
              to="/login"
              className="hover:underline hover:text-amber-300 my-2 inline-block text-gray-800
              "
              href="#"
            >
              Already have an account
            </Link>
            <div>
              <button
                className="btn btn-active btn-warning w-full"
                disabled={lodaing}
              >
                {lodaing ? (
                  <span class="loading loading-spinner text-warning"></span>
                ) : (
                  "Signed Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
