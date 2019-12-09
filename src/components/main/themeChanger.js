import React, {Component} from "react";

export class ThemeChanger extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isClicked: false
        }

        this.onClick = this.onClick.bind(this)

    }

    onClick = (isClicked) => {
        this.setState({
            isClicked: !isClicked
        })
    }


    render() {
        const {onSubmit} = this.props;

        return(
            <button onClick={onSubmit} className="btn">
                Dark theme
            </button>
        )
    }
}
