import React from "react";

export const Checkbox = (props) =>{
    const {onChange, isChecked, label} = props;

    return(
        <div className="radio">
            <span>{label}</span>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
        </div>
    )
}
