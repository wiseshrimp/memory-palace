import React from 'react';
import { Link, hashHistory, browserHistory } from 'react-router';

export default class EditUserPage extends React.Component {
  constructor(props) {
      super(props);
      this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
  }

  onUpdateSubmit(event) {
      event.preventDefault();
      const userCred = {};

      if (event.target.name.value){
        var name = event.target.name.value.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ')

        userCred.name = name
      }
      if (event.target.email.value) userCred.email = event.target.email.value
      if (event.target.password.value === event.target.passwordReEnter.value) {
        userCred.password = event.target.password.value
      }
      if (event.target.address_line_1.value) userCred.shippingLine1 = event.target.address_line_1.value
      if (event.target.address_line_2.value) userCred.shippingLine2 = event.target.address_line_2.value
      if (event.target.city.value) userCred.shippingCity = event.target.city.value
      if (event.target.state.value) userCred.shippingState = event.target.state.value
      if (event.target.zip.value) userCred.shippingZip = event.target.zip.value

      this.props.update(userCred, this.props.loginUser.id)

      hashHistory.push('/profile');
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form className="form-horizontal" role="form" onSubmit={this.onUpdateSubmit}>
            <fieldset>
              <legend>Edit User Details</legend>
              <div className="form-group">
                <label className="col-sm-4 control-label">Name</label>
                <div className="col-sm-8">
                  <input type="text" name="name" placeholder="enter new name" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Email</label>
                <div className="col-sm-8">
                  <input type="email" name="email" placeholder="enter new email" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Password</label>
                <div className="col-sm-8">
                  <input type="password" name="password" placeholder="enter new password" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Re-enter Password</label>
                <div className="col-sm-8">
                  <input type="password" name="passwordReEnter" placeholder="re-enter new password" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Address Line 1</label>
                <div className="col-sm-8">
                  <input type="text" name="address_line_1" placeholder="enter new address" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Address Line 2</label>
                <div className="col-sm-8">
                  <input type="text" name="address_line_2" placeholder="enter new address" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">City</label>
                <div className="col-sm-8">
                  <input type="text" name="city" placeholder="enter new city" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">State</label>
                <div className="col-sm-8">
                  <input type="text" name="state" placeholder="enter new state" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Zip Code</label>
                <div className="col-sm-8">
                  <input type="text" name="zip" placeholder="enter new zip code" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="pull-right">
                    <button type="submit" className="btn btn-default">Cancel</button>
                    <button type="submit" className="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
