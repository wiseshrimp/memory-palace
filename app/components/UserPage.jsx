import React from 'react';
import { Link } from 'react-router';

export default class UserPage extends React.Component {
  render(){
    return (
      <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">{this.props.loginUser.name}</h3>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-3 col-lg-3 "> <img alt="User Pic" src="elliot.png" className="img-circle img-responsive" /> </div>

                      <div className="col-xs-10 col-sm-10 hidden-md hidden-lg"> <br />
                        <dl>
                          <dt>DEPARTMENT:</dt>
                          <dd>Administrator</dd>
                          <dt>HIRE DATE</dt>
                          <dd>11/12/2013</dd>
                          <dt>DATE OF BIRTH</dt>
                             <dd>11/12/2013</dd>
                          <dt>GENDER</dt>
                          <dd>Male</dd>
                        </dl>
                      </div>
                      <div className=" col-md-9 col-lg-9 ">
                        <table className="table table-user-information">
                          <tbody>
                            <tr>
                              <td>Email</td>
                              <td>{this.props.loginUser.email}</td>
                            </tr>
                            <tr>
                              <td>Address Line 1</td>
                              <td>{this.props.loginUser.shippingLine1}</td>
                            </tr>
                            <tr>
                              <td>Address Line 2</td>
                              <td>{this.props.loginUser.shippingLine2}</td>
                            </tr>
                            <tr>
                              <td>City</td>
                              <td>{this.props.loginUser.shippingCity}</td>
                            </tr>
                            <tr>
                              <td>State</td>
                              <td>{this.props.loginUser.shippingState}</td>
                            </tr>
                            <tr>
                              <td>Zip Code</td>
                              <td>{this.props.loginUser.shippingZip}</td>
                            </tr>
                          </tbody>
                        </table>

                        <Link to={`/orderhistory/${this.props.loginUser.id}`} className="btn btn-primary">View Orders</Link>
                      </div>
                    </div>
                  </div>
                       <div className="panel-footer">
                          <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" className="btn btn-sm btn-primary"><i className="glyphicon glyphicon-envelope"></i></a>
                          <span className="pull-right">
                              <Link to='/profile/edit' data-original-title="Edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-edit"></i></Link>
                          </span>
                        </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
