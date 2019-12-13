import React, { Component } from "react";
import { DropdownButton, Dropdown, Container, Col, Row } from "react-bootstrap";
import GenerateDropdownItem from "../../../components/GenerateDropdownItem";

import styles from "./OrderSummary.css.js";
import CheckoutButton from "../../../components/Button/CheckoutButton";

class OrderSummary extends Component {
  constructor(props) {
    super(props);

    this.handleSelectQuantityChange = this.handleSelectQuantityChange.bind(
      this
    );
    this.getSubtotal = this.getSubtotal.bind(this);
  }

  // A method to update the item price based on its quantity
  updateItemPrice(price, quantity) {
    return (price * quantity).toFixed(2);
  }

  handleSelectQuantityChange(quantity, e, itemId) {
    this.props.handleOnSelectQuantity(quantity, itemId);
  }

  // calculate the subtotal price here
  getSubtotal(items) {
    // debugger;
    let total = 0;
    items.forEach(element => {
      total +=
        Number(element.price.replace(/[^0-9.-]+/, "")) * element.quantity;
    });
    return total.toFixed(2);
  }

  getQuantity(items) {
    let quantity = 0;
    items.forEach(element => {
      quantity += element.quantity;
    });
    return quantity;
  }

  onSelectDelete = () => {

  }

  render() {
    const orderItems = this.props.orderItems;
    const items = []; // to hold JSX

    orderItems.forEach(element => {
      items.push(
        <div key={element.itemId}>
          <div style={{ display: "flex", marginBottom: "2%" }}>
            <Container>
              <Row>
                <Col sm={2}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={element.quantity}
                    size="sm">
                    <Dropdown.Item onSelect={() => {
                      this.props.onOrderItemDelete(element.itemId);
                    }}>
                      Remove
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <GenerateDropdownItem
                      id={element.itemId}
                      onSelect={this.handleSelectQuantityChange} />
                  </DropdownButton>
                </Col>
                <Col sm={8}>{element.name}</Col>
                <Col sm={2}>
                  {"$"}

                  {this.updateItemPrice(
                    Number(element.price.replace(/[^0-9.-]+/, "")),
                    element.quantity
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    });

    return (
      <>
        <div style={styles.summary}>
          <div>Subtotal</div>
          <div>
            {"$"}
            {this.getSubtotal(orderItems)}
          </div>
          <div>Quantity</div>
          <div>
            
            {this.getQuantity(orderItems)}
          </div>
        </div>
        <div style={styles.items}>{items}</div>
        {/* <CheckoutButton /> */}
      </>
    );
  }
}

export default OrderSummary;
