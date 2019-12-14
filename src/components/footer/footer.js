import React from 'react';
import './footer.css'

const green = {color: 'green'};

export function Footer() {
    return(
        <div className="App-footer">
            <a href="https://www.instagram.com/" style={{color: 'red'}}>Instagram</a>
            <a href="https://www.facebook.com/" style={green}>Facebook</a>
            <a href="https://www.twitter.com/" className='App-link'>Twitter</a>
        </div>
    )
}
