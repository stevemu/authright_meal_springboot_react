import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'

import styles from './Restaurant.css.js'
import GroupButton from '../Button/GroupButton'

export default class Restaurant extends Component {

    render() {

        return (
            <div style={styles.container}>
                <Jumbotron style={styles.JumbotronStyle}>
                    <h1>Taipei Cuisine</h1>
                    <p>68 Billings Rd, Quincy, MA 02171</p>
                    {/* <GroupButton /> */}
                </Jumbotron>
            </div >
        )
    }
}
