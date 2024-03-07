import React from 'react'
import GenderCheckBox from '../Component/GenderCheckBox'

const Signup = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-96 mx-auto">
        <div
          className="p-8 h-full w-full bg-gray-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-50
"
        >
          <h1 className="text-center text-gray-300 text-3xl">
            Sign Up <span className="text-green-500">Live Chat app</span>
          </h1>
          <form>
            <div>
              <label className="label">
                <span className="text-base label-text text-white">First Name</span>
              </label>
              <input
                type="text"
                placeholder="first Name"
                class="input input-bordered w-full h-10"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-white">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="last Name"
                class="input input-bordered w-full h-10"
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-white">Password </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="input input-bordered w-full h-10"
              />
            </div>
            
            <div>
              <label className="label">
                <span className="text-base label-text text-white">Confrim Password </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="input input-bordered w-full h-10"
              />
            </div>
            <GenderCheckBox />
            <a className="hover:underline hover:text-blue-700 my-2 inline-block text-white" href="#">
              Already have an account
            </a>
            <div>
              <button className="btn btn-active btn-accent w-full" type="button"> Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup