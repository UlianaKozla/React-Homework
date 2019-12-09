import React from 'react';
import './header.css'

export const Header = function ({geeting, className}) {
    let newDate = new Date().toLocaleDateString();

    return(
        <div className={className}>
            <img src="https://apprecs.org/ios/images/app-icons/256/50/1181404496.jpg" alt="game" title="game" className="img"/>
            <button>Home</button>
            <button>About</button>
            <button>Contacts</button>
            <div>{newDate}</div>
            <div>{geeting}</div>
        </div>
    )
}
