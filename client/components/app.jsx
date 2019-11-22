import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

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
    this.placeOrder = this.placeOrder.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  calculateTotal() {
    const itemsArray = this.state.cart;
    let itemTotal = 0;
    for (let cartIndex = 0; cartIndex < itemsArray.length; cartIndex++) {
      itemTotal = itemTotal + itemsArray[cartIndex].price;
    }
    itemTotal = (itemTotal / 100).toFixed(2);
    return itemTotal;
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

  placeOrder(order) {
    const request = '/api/orders';
    const initObj = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-type': 'application/json'
      }
    };

    fetch(request, initObj)
      .then(response => { return response; })
      .then(data => {
        this.setState({ cart: [] });
        this.setView('catalog', {});
      })
      .catch(error => console.error('There was an error', error));
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header name="WickedSales" setView={this.setView} cartItems={this.state.cart} />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header name="WickedSales" setView={this.setView} cartItems={this.state.cart} />
          <CartSummary setView={this.setView} cartItems={this.state.cart} calculateTotal={this.calculateTotal} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header name="WickedSales" setView={this.setView} cartItems={this.state.cart} />
          <CheckoutForm setView={this.setView} cartItems={this.state.cart} placeOrder={this.placeOrder} calculateTotal={this.calculateTotal} />
        </div>
      );
    } else {
      return (
        <div>
          <Header name="WickedSales" setView={this.setView} cartItems={this.state.cart}/>
          <ProductDetails id={this.state.view.params} setView={this.setView} addToCart={this.addToCart}/>
        </div>
      );
    }
  }
}
