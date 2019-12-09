import React, {Component} from 'react';

export class Input extends Component{
    constructor(props) {
        super(props);

        this.state ={
            value: ''
        }
    }

    onChange =(e ={}) => {
        const {onChange} = this.props;
        const {value = ''} = e.target;
        console.log(value);
        onChange && onChange(value)
    }

    render() {
        const {value} = this.props;

        return(
            <input type="text" className='border' onChange={this.onChange} value={value}/>
        )
    }
}
