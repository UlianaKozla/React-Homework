import React, {Component} from "react";
import {Checkbox, Input, Button} from "../helpers/"

export class InputName extends Component{

    constructor(props) {
        super(props);

        this.state ={
            isChecked: false,
            inputValue: '',
            disabled: false
        }
    }

    onInputChange = (inputValue) => {
        this.setState({
            inputValue
        })
    }

    onCheck = (e) => {
        const {isChecked} = this.state;
        this.setState({
            isChecked: !isChecked
        })
    }

    validation = () => {
        const  {isChecked, inputValue} = this.state;
        if (isChecked && inputValue.length){
            console.log(22);
            return true
        }
    }


    render() {
        const  {inputValue, isChecked} = this.state;
        const {onSubmit, isFormGreen} = this.props;
        const green = isFormGreen ? `green` : '';

        return(
            <div className={`flex ${green}`}>
                <div>Enter your name</div>
                <Input
                    className='border'
                    value={inputValue}
                    onChange={this.onInputChange}
                />
                <Checkbox
                    label="I confirm"
                    isChacked={isChecked}
                    onChange={this.onCheck}
                />
                <Button
                    label="Click on me!"
                    disabled={!this.validation()}
                    onClick = {onSubmit}
                    classname='btn'
                />
            </div>
        )
    }
}
