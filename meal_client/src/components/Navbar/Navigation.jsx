import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import styles from './Navigation.css.js'

const Navigation = (props) => {
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top" style={styles.navigation}>
                <Navbar.Brand href="/">Order Food</Navbar.Brand>
                <Nav className="mr-auto" />
                <input type="text" placeholder="Search" onChange={props.handleChange} style={styles.input}/>
            </Navbar>
        </div>
    )
}

export default Navigation;