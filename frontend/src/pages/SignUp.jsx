import React, { useState } from "react";
import GenderCheckBox from "../Component/GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../Component/hooks/UseSignup";

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
      <div className="flex flex-col items-center justify-center min-h-96 mx-auto">
        <div className="p-8 h-full w-full bg-gray-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-50">
          <h1 className="text-center text-gray-300 text-3xl">
            Sign Up <span className="text-green-500">Live Chat app</span>
          </h1>
          <form onSubmit={handeleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text text-white">
                  First Name
                </span>
              </label>
              <input
                type="text"
                placeholder="first Name"
                class="input input-bordered w-full h-10"
                value={input.firstName}
                onChange={(e) =>
                  setInput({ ...input, firstName: e.target.value.trim() })
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-white">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                placeholder="last Name"
                class="input input-bordered w-full h-10"
                value={input.userName}
                onChange={(e) =>
                  setInput({ ...input, userName: e.target.value.trim() })
                }
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
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value.trim() })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-white">
                  Confrim Password{" "}
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="input input-bordered w-full h-10"
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
              className="hover:underline hover:text-green-300 my-2 inline-block text-white"
              href="#"
            >
              Already have an account
            </Link>
            <div>
              <button
                className="btn btn-active btn-accent w-full"
                disabled={lodaing}
              >
                {lodaing ? (
                  <span class="loading loading-spinner text-accent"></span>
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
