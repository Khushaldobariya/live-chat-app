import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className="flex justify-around">
        <div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text text-white">Female</span> 
    <input type="radio" name="radio-2" class="radio checked:bg-green-500 border-slate-900 mx-2 " checked />
  </label>
</div>
<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text text-white">Male</span> 
    <input type="radio" name="radio-2" class="radio checked:bg-green-500 border-slate-900 mx-2 " checked />
  </label>
</div>
    </div>
  )
}

export default GenderCheckBox