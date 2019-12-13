import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import styles from './ItemModal.css.js'

class ItemModal extends Component {
    render() {
        const { name, price } = this.props

        let number = Number(price.replace(/[^0-9.-]+/, ""));
        let itemTotalPrice = (this.props.quantity * number).toFixed(2)

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={styles.modal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={styles.context}>
                    <div style={styles.quantity}>Quantity</div>
                    <div style={styles.control}>
                        <Button style={styles.controlBtn} onClick={this.props.minushandler} disabled={this.props.quantity < 2}>-</Button>
                        <div style={styles.quantityDisplay}>{this.props.quantity}</div>
                        <Button style={styles.controlBtn} onClick={this.props.addhandler} disabled={this.props.quantity > 4}>+</Button>
                    </div>
                </Modal.Body>
                <Modal.Body style={styles.footer}>
                    <div>Item total: ${itemTotalPrice}</div>
                    <Button variant="primary" onClick={this.props.updateorder} style={styles.footerBtn}>{this.props.command}</Button>
                </Modal.Body>
            </Modal >
        );
    }
}

export default ItemModal;