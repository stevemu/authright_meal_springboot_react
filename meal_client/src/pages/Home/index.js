import React from "react";
import { connect } from "react-redux";

import { updateOrder } from "../../Redux/actions/orderAction";
import { updateMenu } from "../../Redux/actions/menuAction";

import Order from "./Order";
import styles from './index.css.js'
import MenuList from "./MenuList/MenuList";
import Navigation from "../../components/Navbar/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.menu
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.menu !== this.props.menu) {
      this.setState({
        filtered: this.props.menu
      });
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.menu;
      // console.log("Current list is", currentList)
      newList = Object.values(currentList).filter((item) => {
        const lc = item.name.toLowerCase()
        const filter = e.target.value.toLowerCase()

        return lc.includes(filter);
      })
      // console.log("New list is", newList)
    } else {
      newList = this.props.menu;
    }

    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.nav}>
          <Navigation handleChange={this.handleChange} />
        </div>
        <div style={styles.content}>
          <div style={styles.info}>
            <Restaurant style={styles.restaurant} />
            <MenuList style={styles.menu} order={this.props.order} filtered={this.state.filtered} />
          </div>
          <div style={styles.order}>
            <Order
              updateOrder={this.props.updateOrder}
              order={this.props.order}
              menu={this.props.menu} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
  menu: state.menu,
});

const mapDispatchToProps = dispatch => ({
  updateOrder: order => dispatch(updateOrder(order)),
  updateMenu: menu => dispatch(updateMenu(menu))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
