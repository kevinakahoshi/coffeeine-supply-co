import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      creditCard: null,
      shippingAddress: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    this.props.placeOrder(this.state);
  }

  render() {
    const orderTotal = this.props.calculateTotal();
    return (
      <div className="container mb-5">
        <h1>My Cart</h1>
        <h3 className="text-black-50">Order Total: ${orderTotal}</h3>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder="Johnny Appleseed" className="form-control" name="name" onChange={this.handleChange} />
            <label htmlFor="Credit Card" >Credit Card</label>
            <input type="text" placeholder="1234567891011121" className="form-control" name="creditCard" onChange={this.handleChange} />
            <label htmlFor="Shipping Address">Shipping Address</label>
            <textarea rows="5" placeholder={'9200 Irvine Center Drive \nSuite 200 \nIrvine, CA 92618'} className="form-control" name="shippingAddress" onChange={this.handleChange}></textarea>
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
