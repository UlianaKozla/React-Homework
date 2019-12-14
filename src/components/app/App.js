import React, {Component} from 'react';
import './App.css';
import {Footer} from "../footer/footer"
import {Header} from "../header/header";
import {ThemeChanger, renderPeople, InputName} from "../main";

class App extends Component{
    constructor() {
        super();

        this.state = {
            success: false,
            isDarkTheme: false
        }
    }

    ifSuccess = (e) => {
        const {success} = this.state;
        this.setState({
            success: true
        });
    }

    toDarkTheme = (e) => {
        const {isDarkTheme} = this.state;
        this.setState({
            isDarkTheme: !isDarkTheme
        });
    }

    render() {
        const  {success, isDarkTheme} = this.state;
        const darkTheme = isDarkTheme ? `black` : 'white';

        return(
            <div className={`${darkTheme} App`}>
                <Header
                    className="flex App-header"
                    geeting="Hello there!"
                />
                {renderPeople()}
                <ThemeChanger
                    onSubmit={this.toDarkTheme}
                    className="btn"
                    words={isDarkTheme ? 'White theme' : 'Dark theme'}
                />
                <InputName
                    onSubmit={this.ifSuccess}
                    isFormGreen={success}
                />
                {success && <div className="flex App-link">Success</div>}
                <Footer/>
            </div>
        )
    }
 }


export default App;
