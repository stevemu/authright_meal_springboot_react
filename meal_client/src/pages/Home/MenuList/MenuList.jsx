import React, { Component } from "react";
import { Table, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { getMenu, addOrderItem } from "../../../utils";
import { connect } from "react-redux";
import { updateMenu } from "../../../Redux/actions/menuAction";

import styles from "./MenuList.css.js";
import List from "../../../components/List/List";
import ItemModal from "../../../components/ItemModal/ItemModal";

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: null,
      currentPrice: "$0.00",
      currentItemId: null,
      quantity: 1,
      unitprice: 8.95,
      modalShow: false,
      command: "Add",
      menu: []
    };

    this.setModalShow = this.setModalShow.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
  }

  setModalShow(value) {
    this.setState({
      modalShow: value,
      quantity: 1
    });
  }

  addHandler = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };

  minusHandler = () => {
    this.setState({
      quantity: this.state.quantity - 1
    });
  };

  fetchDetails = event => {
    const targetName = event.currentTarget.getAttribute("data-item");
    const targetPrice = event.currentTarget.getAttribute("data-price");
    const targetId = event.currentTarget.getAttribute("data-id");

    this.setState({
      currentData: targetName,
      currentPrice: targetPrice,
      currentItemId: targetId
    });
  };

  async updateOrder(value) {
    // use fetch to call api to push data to database.
    this.setState(state => ({
      ...state,
      modalShow: value,
      quantity: 1
    }));

    let itemId = this.state.currentItemId;
    let quantity = this.state.quantity;

    // debugger;
    await addOrderItem(itemId, quantity);
  }

  componentDidMount() {
    // fetch the project name, once it retrieves resolve the promsie and update the state.
    getMenu().then(result => this.props.updateMenu(result));
  }

  render() {
    const { data, filtered } = this.props;
    const { currentData, currentPrice } = this.state;
    return (
      <div style={styles.container}>
        <Navbar collapseOnSelect sticky="top" fixed="top" style={styles.nav}>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#lunch-special">Lunch Special</Nav.Link>
              <Nav.Link href="#appetizers">Appetizers</Nav.Link>
              <Nav.Link href="#chef">Chef's Specialties</Nav.Link>
              <NavDropdown
                title="More"
                id="collasible-nav-dropdown"
                style={styles.dropdown}
              >
                <NavDropdown.Item href="#beef">Beef / Lamb</NavDropdown.Item>
                <NavDropdown.Item href="#chicken">
                  Chicken / Duck
                </NavDropdown.Item>
                <NavDropdown.Item href="#pork">Pork</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* lunch special */}
        <div style={styles.body}>
          <Table style={styles.table} responsive>
            <thead id="lunch-special">
              <tr>
                <th>ID</th>
                <th>Lunch Special</th>
                <th>Price</th>
              </tr>
            </thead>
            <List
              data={filtered}
              start={0}
              end={58}
              setModalShow={this.setModalShow}
              fetchDetails={this.fetchDetails}
            />
            {/* appetizers */}
            <thead id="appetizers">
              <tr>
                <th>ID</th>
                <th>Appetizers</th>
                <th>Price</th>
              </tr>
            </thead>
            <List
              data={filtered}
              start={56}
              end={86}
              setModalShow={this.setModalShow}
              fetchDetails={this.fetchDetails}
            />
            {/* Chef's Specialties */}
            <thead id="chef">
              <tr>
                <th>ID</th>
                <th>Chef's Specialties</th>
                <th>Price</th>
              </tr>
            </thead>
            <List
              data={filtered}
              start={83}
              end={102}
              setModalShow={this.setModalShow}
              fetchDetails={this.fetchDetails}
            />
            {/* Beef / Lamb */}
            <thead id="beef">
              <tr>
                <th>ID</th>
                <th>Beef / Lamb</th>
                <th>Price</th>
              </tr>
            </thead>
            <List
              data={filtered}
              start={101}
              end={117}
              setModalShow={this.setModalShow}
              fetchDetails={this.fetchDetails}
            />
            {/* Pork */}
            <thead id="chicken">
              <tr>
                <th>ID</th>
                <th>Chicken / Duck</th>
                <th>Price</th>
              </tr>
            </thead>
            <List
              data={filtered}
              start={138}
              end={158}
              setModalShow={this.setModalShow}
              fetchDetails={this.fetchDetails}
            />
            {/* Chicken */}
            <thead id="pork">
              <tr>
                <th>ID</th>
                <th>Pork</th>
                <th>Price</th>
              </tr>
            </thead>
            <List
              data={filtered}
              start={117}
              end={138}
              setModalShow={this.setModalShow}
              fetchDetails={this.fetchDetails}
            />
          </Table>
          <ItemModal
            data={data}
            name={currentData}
            price={currentPrice}
            show={this.state.modalShow}
            quantity={this.state.quantity}
            addhandler={this.addHandler}
            minushandler={this.minusHandler}
            unitprice={this.state.unitprice}
            command={this.state.command}
            onHide={() => this.setModalShow(false)}
            updateorder={() => this.updateOrder(false)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.menu
});

const mapDispatchToProps = dispatch => ({
  updateMenu: menu => dispatch(updateMenu(menu))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
