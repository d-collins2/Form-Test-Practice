import React from 'react';

const CheckBox = ({ checked, handleChange, label, labelFor }) => {
    return (
      <div className="form-check">
          <input
            className="form-check-input"
            name={labelFor}
            type="checkbox"
            checked={checked}
            id={labelFor}
            onChange={handleChange}/>
          <label className="form-check-label">{label}</label>
      </div>
    )
}

export default CheckBox;
