import React from 'react';
import CartSummaryItem from './cart-summary-item';
import RemoveModal from './remove-modal';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      productToRemove: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.productToRemove = this.productToRemove.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  productToRemove(cartItem) {
    this.setState({ productToRemove: cartItem });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const itemTotal = this.props.calculateTotal();

    const products = this.props.cartItems.map(product => {
      return <CartSummaryItem product={product} key={product.id}
        removeFromCart={this.props.removeFromCart}
        toggleModal={this.toggleModal}
        showModal={this.state.showModal}
        productToRemove={this.productToRemove}
        sendToCart={this.props.sendToCart}/>;
    });

    if (this.props.cartItems.length === 0) {
      return (
        <div className="container py-5">
          <div className="mb-3">
            <a href="#" className="mb-3" onClick={() => {
              this.props.setView('catalog', {});
            }}><i className="fas fa-chevron-circle-left"></i> Back to Catalog</a>
          </div>
          <h1>My Cart</h1>
          <h3>There are no items in your cart</h3>
        </div>
      );
    } else {
      return (
        <div className="container py-5">
          <div className="mb-3">
            <a href="#" className="mb-3" onClick={() => {
              this.props.setView('catalog', {});
            }}><i className="fas fa-chevron-circle-left"></i> Back to Catalog</a>
          </div>
          <h1>My Cart</h1>
          {products}
          <RemoveModal cartItem={this.state.productToRemove}
            toggleModal={this.toggleModal}
            removeFromCart={this.props.removeFromCart}
            showModal={this.state.showModal}/>
          <div className="d-md-flex justify-content-between">
            <h3 className="md-my-auto text-black-50">Item Total: ${itemTotal}</h3>
            <button className="btn btn-primary my-auto" onClick={() => {
              this.props.setView('checkout', {});
            }}>Proceed to Checkout</button>
          </div>
        </div>
      );
    }
  }
}

export default CartSummary;
