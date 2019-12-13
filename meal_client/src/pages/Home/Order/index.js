import React from "react";
import { getOrder, updateOrderItem, deleteOrderItem } from "../../../utils";

import OrderSummary from "./OrderSummary.jsx";

export default class Order extends React.Component {
  constructor(props) {
    super(props);

    this.handleQuantity = this.handleQuantity.bind(this);
  }

  async componentDidMount() {
    let order = await getOrder();
    this.props.updateOrder(order);

    this.timerID = setInterval(() => this.tick(), 500);
  }

  async handleQuantity(quantity, itemId) {
    let newOrder = {
      ...this.props.order,
      [itemId]: parseInt(quantity)
    };

    this.props.updateOrder(newOrder);
    await updateOrderItem(itemId, quantity);
  }

  async tick() {
    let apiData = await getOrder();
    this.props.updateOrder(apiData);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // combine menu and order
  generateFullOrderItems(menu, order) {
    let arr = Object.keys(order).map(itemId => {
      let quantity = order[itemId];
      let { name, price } = menu[itemId];
      return {
        itemId,
        quantity,
        price,
        name
      };
    });
    return arr;
  }

  onOrderItemDelete = async itemId => {
    await deleteOrderItem(itemId);
  };

  render() {
    return (
      <OrderSummary
        orderItems={this.generateFullOrderItems(
          this.props.menu,
          this.props.order
        )}
        onOrderItemDelete={this.onOrderItemDelete}
        handleOnSelectQuantity={this.handleQuantity}
      />
    );
  }
}
