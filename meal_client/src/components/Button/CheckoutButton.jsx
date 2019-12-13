import React from 'react'
import { Button } from "react-bootstrap";

import styles from './CheckoutButton.css.js'

export default function CheckoutButton() {
    return (
        <div style={styles.checkout}>
            <Button variant="primary" block>
                Checkout
            </Button>
        </div>
    )
}
