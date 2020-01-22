import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutPage from './checkout-page';
import OrderConfirmation from './order-confirmation';
import Footer from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      },
      confirmationPage: null,
      showIntroModal: {
        show: true,
        displayNone: false
      },
      fadeOut: false
    };
    this.setView = this.setView.bind(this);
    this.toggleIntroModal = this.toggleIntroModal.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.sendToCart = this.sendToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.setConfirmation = this.setConfirmation.bind(this);
  }

  setView(name, params) {
    this.setState({ fadeOut: true });
    setTimeout(() => {
      this.setState({
        fadeOut: false,
        view: { name, params }
      });
    }, 750);
  }

  toggleIntroModal() {
    this.setState({
      showIntroModal: {
        show: false,
        displayNone: false
      }
    });
    setTimeout(() => {
      this.setState({
        showIntroModal: {
          show: false,
          displayNone: true
        }
      });
    }, 750);
  }

  calculateTotal() {
    const itemsArray = this.state.cart;
    let itemTotal = 0;
    for (let cartIndex = 0; cartIndex < itemsArray.length; cartIndex++) {
      itemTotal += (itemsArray[cartIndex].price * itemsArray[cartIndex].quantity);
    }
    itemTotal = (itemTotal / 100).toFixed(2);
    return itemTotal;
  }

  getCartItems() {
    const request = '/api/cart';
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({ cart: data }))
      .catch(error => console.error('There was an error:', error.message));
  }

  sendToCart(productId, operator) {
    const bodyObject = { productId, operator };
    const request = '/api/cart';
    const initObj = {
      method: 'POST',
      body: JSON.stringify(bodyObject),
      headers: {
        'Content-type': 'application/json'
      }
    };
    fetch(request, initObj)
      .then(response => response.json())
      .then(() => {
        this.getCartItems();
        this.setState();
      })
      .catch(error => console.error('There was an error:', error.message));
  }

  removeFromCart(cartItemId) {
    const request = '/api/cart';
    const initObj = {
      method: 'DELETE',
      body: JSON.stringify({ cartItemId }),
      headers: {
        'Content-type': 'application/json'
      }
    };
    fetch(request, initObj)
      .then(response => response.json())
      .then(() => {
        this.getCartItems();
        this.setState();
      })
      .catch(error => console.error('Error with Removing From Cart:', error.message));
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
      .then(response => response.json())
      .then(data => {
        this.setState({ cart: [] });
        this.setView('orderConfirmation', {});
      })
      .catch(error => console.error('There was an error:', error.message));
  }

  setConfirmation(products) {
    this.setState({ confirmationPage: products });
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    let view = null;
    switch (this.state.view.name) {
      case 'catalog':
        view = <ProductList setView={this.setView}
          showIntroModal={this.state.showIntroModal}
          toggleIntroModal={this.toggleIntroModal} />;
        break;
      case 'cart':
        view = <CartSummary setView={this.setView}
          cartItems={this.state.cart}
          calculateTotal={this.calculateTotal}
          removeFromCart={this.removeFromCart}
          sendToCart={this.sendToCart} />;
        break;
      case 'checkout':
        view = <CheckoutPage setView={this.setView}
          setConfirmation={this.setConfirmation}
          cartItems={this.state.cart}
          placeOrder={this.placeOrder}
          calculateTotal={this.calculateTotal} />;
        break;
      case 'orderConfirmation':
        view = <OrderConfirmation setView={this.setView}
          confirmationPage={this.state.confirmationPage} />;
        break;
      default:
        view = <ProductDetails id={this.state.view.params}
          setView={this.setView}
          sendToCart={this.sendToCart} />;
        break;
    }

    return (
      <>
        <Header name="Coffeine Supply Co"
          setView={this.setView}
          toggleIntroModal={this.toggleIntroModal}
          showIntroModal={this.state.showIntroModal}
          cartItems={this.state.cart}
          currentView={this.state.view.name} />
        <div className={`content-div ${this.state.fadeOut ? 'fade-out' : 'fade-in'}`}>
          {view}
        </div>
        <Footer />
      </>
    );
  }
}
