import React from 'react';
import './App.css';
import { people } from "./people";

const Greeting = (words = 'hello', className) => {
  return(
      <div className={className}>
        {words}
      </div>
  )
}

function header() {
  let newDate = new Date().toLocaleDateString();

  return(
      <div className="flex, App-header" >
        <img src="https://apprecs.org/ios/images/app-icons/256/50/1181404496.jpg" alt="game" title="game" className="img"/>
        {btn('Home')}
        {btn('About')}
        {btn('Contacts')}
        {newDate}
      </div>
  )
}

function renderPeopleLisr() {
  return people.map(person => {
    const { name, surname, image } = person;
    return (
        <li className="App-list, flex" key={`${name} ${surname}`}>
          <div>Hello {name} {surname}!</div>
          <img src={`${image}`} className="img"/>
        </li>
    )
  })
}
function btn(text) {
  return (
      <div className="btn">
        <button>{text}</button>
      </div>
  )
}

function footer() {
  return(
      <div className="App-footer" >
        {/*<Greeting className="App-link"/>*/}
        <a href="https://www.instagram.com/" className="App-link">Instagram</a>
        <a href="https://www.facebook.com/" className="App-link">Facebook</a>
        <a href="https://www.twitter.com/" className="App-link">Twitter</a>
      </div>
  )
}

function App() {
  return (
      <div>
        {header()}
        {renderPeopleLisr()}
        {footer()}
      </div>
  )
}

export default App;
