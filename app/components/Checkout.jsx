import React from 'react';
import { Link } from 'react-router';

export default class Checkout extends React.Component {
    
    render() {
        let {products} = this.props.cart;
        let price = 0;
        var style = {
            textAlign: "right"
        }
        if (products === undefined) return (
            <div className="container">
                <h3>Add things to your cart before checking out!</h3>
            </div>
        )
        else return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-12'>
                        <div id='mainContentWrapper'>
                            <div className="col-md-8 col-md-offset-2">
                                <h2>
                                    Review Your Order & Complete Checkout
                                </h2>
                                <hr />
                                <a href="#" className="btn btn-info">Add More Products & Services</a>
                                <hr />
                                <div className="shopping_cart">
                                    <form className="form-horizontal" role="form" action="" method="post" id="payment-form">
                                        <div className="panel-group" id="accordion">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Review Your Order</a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse in">
                                                    <div className="panel-body">
                                                        <div className="items">
                                                            <div className="col-md-9">
                                                                    {
                                                                        (products && products.map((product, i) => {
                                                                            price += Number(product.price);
                                                                            return (
                                                                                    <tr key={product.id}>
                                                                                        <td className="col-sm-8 col-md-7">
                                                                                        <div className="media">
                                                                                            <Link to={`/products/${product.id}`} className="thumbnail pull-left product-icon"> <img className="media-object" src={product.imageUrl} /> </Link>
                                                                                            <div className="media-body">
                                                                                            <h4 className="media-heading"><Link to={`/products/${product.id}`}>{product.title}</Link></h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        </td>
                                                                                    
                                                                                        <td className="col-sm-1 col-md-1 text-right"><strong>{product.price}</strong></td>
                                                                                    </tr>
                                                                        )}))
                                                                    }
                                                                    <h3>Order total:</h3> ${price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Contact and Billing Information</a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <b>Help us keep your account safe and secure, please verify your billing information.</b>
                                                    <br /><br />
                                                    <table className="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="id_email">Best Email:</label>
                                                                </td>
                                                                <td>
                                                                    <input className="form-control" id="id_email" name="email" required="required" type="text"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label htmlFor="id_first_name">First name:</label></td>
                                                                <td><input className="form-control" id="id_first_name" name="first_name" required="required" type="text"/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="id_last_name">Last name:</label></td>
                                                                <td>
                                                                    <input className="form-control" id="id_last_name" name="last_name"
                                                                            required="required" type="text"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="id_address_line_1">Address:</label></td>
                                                                <td>
                                                                    <input className="form-control" id="id_address_line_1"
                                                                        name="address_line_1" required="required" type="text"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="id_address_line_2">Unit / Suite #:</label></td>
                                                                <td>
                                                                    <input className="form-control" id="id_address_line_2"
                                                                        name="address_line_2" type="text"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="id_city">City:</label></td>
                                                                <td>
                                                                    <input className="form-control" id="id_city" name="city"
                                                                        required="required" type="text"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="id_state">State:</label></td>
                                                                <td>
                                                                    <select className="form-control" id="id_state" name="state">
                                                                        <option value="AK">Alaska</option>
                                                                        <option value="AL">Alabama</option>
                                                                        <option value="AZ">Arizona</option>
                                                                        <option value="AR">Arkansas</option>
                                                                        <option value="CA">California</option>
                                                                        <option value="CO">Colorado</option>
                                                                        <option value="CT">Connecticut</option>
                                                                        <option value="DE">Delaware</option>
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
                                                                        <option value="DC">Washington D.C.</option>
                                                                        <option value="WV">West Virginia</option>
                                                                        <option value="WI">Wisconsin</option>
                                                                        <option value="WY">Wyoming</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="id_postalcode">Postalcode:</label></td>
                                                                <td>
                                                                    <input className="form-control" id="id_postalcode" name="postalcode"
                                                                        required="required" type="text"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="id_phone">Phone:</label></td>
                                                                <td>
                                                                    <input className="form-control" id="id_phone" name="phone" type="text"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Payment Information</a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <span className='payment-errors'></span>
                                                    <fieldset>
                                                        <legend>What method would you like to pay with today?</legend>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="card-holder-name">Name on Card</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control"
                                                                        id="name-on-card" placeholder="Card Holder's Name" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="card-number">Card Number</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control"
                                                                    id="card-number" placeholder="Debit/Credit Card Number" />
                                                                <br />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-3 control-label" htmlFor="expiry-month">Expiration Date</label>
                                                                <div className="col-sm-9">
                                                                    <div className="row">
                                                                        <div className="col-xs-3">
                                                                            <select className="form-control col-sm-2"
                                                                                    data-stripe="exp-month" id="card-exp-month">
                                                                                <option>Month</option>
                                                                                <option value="01">Jan (01)</option>
                                                                                <option value="02">Feb (02)</option>
                                                                                <option value="03">Mar (03)</option>
                                                                                <option value="04">Apr (04)</option>
                                                                                <option value="05">May (05)</option>
                                                                                <option value="06">June (06)</option>
                                                                                <option value="07">July (07)</option>
                                                                                <option value="08">Aug (08)</option>
                                                                                <option value="09">Sep (09)</option>
                                                                                <option value="10">Oct (10)</option>
                                                                                <option value="11">Nov (11)</option>
                                                                                <option value="12">Dec (12)</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="col-xs-3">
                                                                            <select className="form-control" data-stripe="exp-year"
                                                                                    id="card-exp-year">
                                                                                <option value="2016">2016</option>
                                                                                <option value="2017">2017</option>
                                                                                <option value="2018">2018</option>
                                                                                <option value="2019">2019</option>
                                                                                <option value="2020">2020</option>
                                                                                <option value="2021">2021</option>
                                                                                <option value="2022">2022</option>
                                                                                <option value="2023">2023</option>
                                                                                <option value="2024">2024</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-3 control-label" htmlFor="cvv">Card CVC</label>
                                                                <div className="col-sm-3">
                                                                    <input type="text" className="form-control"
                                                                            id="card-cvc" placeholder="Security Code" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="col-sm-offset-3 col-sm-9"></div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <button type="submit" className="btn btn-success btn-lg">Pay Now</button>
                                                    <br />
                                                    <div><br/>
                                                        By submiting this order you are agreeing to our <a href="/legal/billing/">universal
                                                            billing agreement</a>, and <a href="/legal/terms/">terms of service</a>.
                                                        If you have any questions about our products or services please contact us
                                                        before placing this order.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}