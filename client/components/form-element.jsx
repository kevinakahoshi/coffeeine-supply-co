import React from 'react';

class FormElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phone: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      creditCard: '',
      month: '',
      year: '',
      cvv: '',
      terms: '',
      formValidation: {
        fullName: true,
        phone: true,
        email: true,
        address1: true,
        address2: true,
        city: true,
        state: true,
        zipCode: true,
        creditCard: true,
        month: true,
        year: true,
        cvv: true,
        terms: true
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'phone':
      case 'creditCard':
      case 'zipCode':
      case 'cvv':
        if (/^[0-9]*$/.test(event.target.value)) {
          this.setState({ [event.target.name]: event.target.value });
        }
        break;
      default:
        this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formValidation = JSON.parse(JSON.stringify(this.state.formValidation));

    if (!/[A-Z][a-z]{1, 65}/.test(this.state.fullName)) {
      formValidation.fullName = false;
    }

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
      formValidation.email = false;
    }

    if (this.state.creditCard.includes(' ')) {
      this.setState({ creditCard: this.state.creditCard.split(' ').join('') });
    } else if (this.state.creditCard.includes('-')) {
      this.setState({ creditCard: this.state.creditCard.split('-').join('') });
    }

    if (Object.values(formValidation).indexOf(false) === -1) {
      // console.log('Everything is truthy');
    } else {
      // console.log('Everything is falsy');
    }

  }

  render() {
    return (
      <form className="p-3 border rounded bg-white needs-validation"
        id="checkout-form"
        onChange={() => this.handleChange(event)}
        onSubmit={() => this.handleSubmit(event)}>
        <div className="form-group">
          <h5>Billing/Shipping Address</h5>
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text"
            name="fullName"
            className={`form-control ${this.state.formValidation.fullName ? null : 'is-invalid'}`}
            minLength="5"
            maxLength="65"
            required />
          <div className="invalid-feedback">
            <small>Not a valid name input.</small>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Phone</label>
            <input type="tel"
              name="phone"
              className={`form-control ${this.state.formValidation.phone ? null : 'is-invalid'}`}
              onChange={() => this.handleChange(event)}
              value={this.state.phone}
              minLength="10"
              maxLength="11" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email"
              name="email"
              className={`form-control ${this.state.formValidation.email ? null : 'is-invalid'}`}
              minLength="6"
              maxLength="254"
              required />
            <div className="invalid-feedback">
              <small>Missing or invalid email address.</small>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Address 1</label>
            <input type="text"
              name="address1"
              className={`form-control ${this.state.formValidation.address1 ? null : 'is-invalid'}`}
              required />
            <div className="invalid-feedback">
              <small>Missing or invalid address.</small>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text"
              name="address2"
              className={`form-control ${this.state.formValidation.address2 ? null : 'is-invalid'}`} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text"
              name="city"
              className={`form-control ${this.state.formValidation.city ? null : 'is-invalid'}`}
              minLength="3"
              maxLength="50"
              required />
            <div className="invalid-feedback">
              <small>Missing or invalid</small>
            </div>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputState">State</label>
            <select className={`form-control ${this.state.formValidation.state ? null : 'is-invalid'}`}
              name="state"
              required>
              <option defaultValue hidden></option>
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
            <div className="invalid-feedback">
              <small>Please select a state.</small>
            </div>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputZip">Zip</label>
            <input type="text"
              name="zipCode"
              className={`form-control ${this.state.formValidation.zipCode ? null : 'is-invalid'}`}
              onChange={() => this.handleChange(event)}
              value={this.state.zipCode}
              minLength="5"
              maxLength="9"
              required/>
            <div className="invalid-feedback">
              <small>Missing or invalid zipcode.</small>
            </div>
          </div>
        </div>
        <div className="form-group">
          <h5>Payment Details</h5>
        </div>
        <div className="form-row p-3 border rounded mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="creditCard">Credit Card Number</label>
            <input type="text"
              name="creditCard"
              className={`form-control ${this.state.formValidation.creditCard ? null : 'is-invalid'}`}
              minLength="16"
              maxLength="19"
              onChange={() => this.handleChange(event)}
              value={this.state.creditCard}
              required />
            <div className="invalid-feedback">
              <small>Missing or invalid credit card number.</small>
            </div>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputState">Month</label>
            <select className={`form-control ${this.state.formValidation.month ? null : 'is-invalid'}`}
              name="month"
              required>
              <option defaultValue hidden></option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <div className="invalid-feedback">
              <small>Please select a month.</small>
            </div>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputState">Year</label>
            <select className={`form-control ${this.state.formValidation.year ? null : 'is-invalid'}`}
              name="year"
              required>
              <option defaultValue hidden></option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            <div className="invalid-feedback">
              <small>Please select a year.</small>
            </div>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">CVV</label>
            <input type="text"
              name="cvv"
              className={`form-control ${this.state.formValidation.cvv ? null : 'is-invalid'}`}
              minLength="3"
              maxLength="4"
              required />
            <div className="invalid-feedback">
              <small>Missing or invalid CVV.</small>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input"
              name="terms"
              type="checkbox"
              id="gridCheck"
              required />
            <label className="form-check-label"
              htmlFor="gridCheck">
              I accept that this website is for demonstration purposes, that no payment processing will be done, and that personal information such as names, addresses, or real credit card numbers should not be used on submission of this form.
            </label>
          </div>
        </div>
        <button type="submit"
          className="btn btn-primary">Process Order</button>
      </form>
    );
  }
}

export default FormElement;
