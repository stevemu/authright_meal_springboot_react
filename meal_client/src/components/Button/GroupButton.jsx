import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

import styles from './GroupButton.css.js'

export default class GroupButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            button: !this.state.button
        })
    }

    // bgColorShawn: "007bff",
    render() {
        const { button } = this.state

        return (
            <div>
                <ButtonGroup toggle>
                    <Button
                        style={button ? styles.buttonFalse : styles.buttonTrue}
                        onClick={this.handleClick}
                        defaultChecked>
                        Steve
                    </Button>
                    <Button
                        style={button ? styles.buttonTrue : styles.buttonFalse}
                        onClick={this.handleClick}>
                        Shawn
                    </Button>
                </ButtonGroup>
            </div >
        )
    }
}
