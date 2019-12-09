import React, {Component} from 'react';
import './App.css';
import {footer} from "../footer/footer"
import {Header} from "../header/header";
import {renderPeopleList} from "../main/renderPeople";
import {InputName} from "../main/inputName";
import {ThemeChanger} from '../main/themeChanger'

class App extends Component{
    constructor() {
        super();

        this.state = {
            success: false,
            isdarkTheme: false
        }
    }

    ifSuccess = (e) => {
        const {success} = this.state;
        this.setState({
            success: true
        });
    }

    toDarkTheme = (e) => {
        const {isdarkTheme} = this.state;
        this.setState({
            isdarkTheme: !isdarkTheme
        });
    }

    render() {
        const  {success, isdarkTheme} = this.state;
        const dark_theme = isdarkTheme ? `black` : 'white';

        return(
            <div className={`${dark_theme} App`}>
                <Header className="flex, App-header" geeting="Hello there!"/>
                {renderPeopleList()}
                <ThemeChanger onSubmit={this.toDarkTheme} className="btn"/>
                <InputName onSubmit={this.ifSuccess} isFormGreen={success}/>
                {success && <div className="flex App-link">Success</div>}
                <div>{footer()}</div>
            </div>
        )
    }
 }


export default App;
