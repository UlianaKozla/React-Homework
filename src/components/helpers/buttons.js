import React from 'react';

export const Button = function (props) {

    const onClick = (e) => {
        const {onClick} = props;
        onClick && onClick()
    }

    const {label = '', disabled = false} = props;

    return (
        <button
            className="btn"
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

