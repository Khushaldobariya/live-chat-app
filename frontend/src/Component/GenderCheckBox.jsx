import React, { useState } from "react";

const GenderCheckBox = ({  gender, onChange  }) => {

  
  return (
    <div className="flex justify-around">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text text-gray-800">Female</span>

          <input
            type="radio"
            name="radio-2"
            class="radio checked:bg-amber-300 border-slate-900 mx-2 "
            value="female"
            checked={gender === "female" ? true : false}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text text-gray-800">Male</span>
          <input
            type="radio"
            name="radio-2"
            class="radio checked:bg-amber-300 border-slate-900 mx-2 "
            value="male"
            checked={gender === "male" ? true : false}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
