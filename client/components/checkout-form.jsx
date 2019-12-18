import React from 'react';
import CheckoutInput from './checkout-input';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      isValid: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({
      [event.target.name]: value,
      isValid: null
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name && this.state.creditCard.length === 16 && parseInt(this.state.creditCard) && this.state.shippingAddress) {
      this.props.placeOrder({
        name: this.state.name,
        creditCard: this.state.creditCard,
        shippingAddress: this.state.shippingAddress
      });
    } else {
      this.setState({ isValid: false });
    }
  }

  render() {
    const orderTotal = this.props.calculateTotal();
    let validation = null;
    if (this.state.isValid === false && !this.state.shippingAddress) {
      validation = 'is-invalid';
    }
    return (
      <div className="container my-5">
        <h1>My Cart</h1>
        <h3 className="text-black-50">Order Total: ${orderTotal}</h3>
        <form action=""
          className="needs-validation"
          onSubmit={() => {
            this.handleSubmit(event);
          }}>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <CheckoutInput type={'text'}
              placeholder='Johnny Appleseed'
              value={this.state.name}
              handleChange={this.handleChange}
              name='name'
              minLength={3}
              maxLength={20}
              isValid={this.state.isValid}
            />
            <div className="invalid-feedback">Invalid name entry.  Minimum of 3 characters required</div>
          </div>
          <div className="form-group">
            <label htmlFor="Credit Card" >Credit Card</label>
            <CheckoutInput type={'tel'}
              placeholder='0000 0000 0000 0000'
              value={this.state.creditCard}
              handleChange={this.handleChange}
              name='creditCard'
              minLength={16}
              maxLength={16}
              isValid={this.state.isValid}
            />
            <div className="invalid-feedback">Invalid credit card number.  16 numbers required.</div>
          </div>
          <div className="form-group">
            <label htmlFor="Shipping Address">Shipping Address</label>
            <textarea
              rows="5"
              placeholder={'9200 Irvine Center Drive \nSuite 200 \nIrvine, CA 92618'}
              className={`form-control ${validation}`}
              name="shippingAddress"
              minLength="3"
              autoComplete="off"
              value={this.state.shippingAddress}
              onChange={event => this.handleChange(event.target.value)} />
            <div className="invalid-feedback">No address present.  Please enter a valid address.</div>
          </div>
          <a href="#" className="mb-3" onClick={() => {
            this.props.setView('catalog', {});
          }}><i className="fas fa-chevron-circle-left"></i> Continue Shopping</a>
          <button className="btn btn-primary float-right" type="submit">Submit Order</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
