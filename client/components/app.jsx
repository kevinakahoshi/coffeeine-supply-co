import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    const request = '/api/cart';
    const initObj = {
      method: 'GET'
    };
    fetch(request, initObj)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ cart: data });
      })
      .catch(error => {
        console.error('There was an error:', error.message);
      });
  }

  addToCart(product) {
    const request = '/api/cart';
    const initObj = {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-type': 'application/json'
      }
    };
    fetch(request, initObj)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ cart: this.state.cart.concat(data) });
      })
      .catch(error => {
        console.error('There was an error:', error.message);
      });
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header name="WickedSales" cartItems={this.state.cart} />
          <ProductList setView={this.setView} />
        </div>
      );
    } else {
      return (
        <div>
          <Header name="WickedSales" cartItems={this.state.cart}/>
          <ProductDetails id={this.state.view.params} setView={this.setView} addToCart={this.addToCart}/>
        </div>
      );
    }
  }
}
