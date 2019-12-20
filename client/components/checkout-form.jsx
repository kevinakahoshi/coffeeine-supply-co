import React from 'react';
// import CheckoutInput from './checkout-input';

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

  handleSubmit(event, formData) {
    event.preventDefault();
    // if (this.state.name && this.state.creditCard.length === 16 && parseInt(this.state.creditCard) && this.state.shippingAddress) {
    //   this.props.placeOrder({
    //     name: this.state.name,
    //     creditCard: this.state.creditCard,
    //     shippingAddress: this.state.shippingAddress
    //   });
    // } else {
    //   this.setState({ isValid: false });
    // }
    this.props.placeOrder(formData);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const orderTotal = this.props.calculateTotal();
    // let validation = null;
    // if (this.state.isValid === false && !this.state.shippingAddress) {
    //   validation = 'is-invalid';
    // }
    return (
      <div className="container py-5">
        <div className="mb-3">
          <a href="#" onClick={() => {
            this.props.setView('catalog', {});
          }}><i className="fas fa-chevron-circle-left" /> Continue Shopping</a>
        </div>
        <h1>My Cart</h1>
        <h3 className="text-black-50">Order Total: ${orderTotal}</h3>
        {/* <form action=""
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
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary"
              type="submit">Submit Order</button>
          </div>
        </form> */}

        <form className="p-3 border rounded bg-white" onSubmit={() => { event.preventDefault(); }}>
          <div className="form-group">
            <h5>Billing/Shipping Address</h5>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="form-control" placeholder="John Doe" required/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" placeholder="example@example.com" required/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address 1</label>
            <input type="text" className="form-control" placeholder="9200 Irvine Center Drive" required/>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text" className="form-control" placeholder="Suite 200" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" placeholder="Irvine" required/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select className="form-control" required>
                <option selected>Choose...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" placeholder="92618" required/>
            </div>
          </div>
          <div className="form-group">
            <h5>Payment Details</h5>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" required/>
              <label className="form-check-label" htmlFor="gridCheck">
                    I accept that this website is for demonstration purposes, that no payment processing will be done, and that personal information such as names, addresses, or real credit card numbers should not be used on submission of this form.
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Process Order</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
