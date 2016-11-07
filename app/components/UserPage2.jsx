import React from 'react';

export default class UserPage extends React.Component {
  render(){
    return (
      <div className="container">
      <div className="row profile">
  		<div className="col-md-3">
  			<div className="profile-sidebar">
  				<div className="profile-userpic">
  				<img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" className="img-responsive" alt="" />
  				</div>
  				<div className="profile-usertitle">

  					<div className="profile-usertitle-name">
  						<span className="hidden-xs">{this.props.loginUser.name}</span>
  					</div>
  					<div className="profile-usertitle-job">
  					</div>
  				</div>
  				<div className="profile-usermenu">
  					<ul className="nav">
  						<li className="active">
  							<a href="#">
  							<i className="glyphicon glyphicon-home"></i>
  							<span className="hidden-xs">Personal</span> </a>
  						</li>
  						<li>
  							<a href="#">
  							<i className="glyphicon glyphicon-user"></i>
  							<span className="hidden-xs">Delivery Address</span> </a>
  						</li>
  						<li>
  							<a href="#">
  							<i className="glyphicon glyphicon-ok"></i>
  							<span className="hidden-xs">Orders </span></a>
  						</li>
              <li>
  							<a href="#">
  							<i className="glyphicon glyphicon-shopping-cart"></i>
  							<span className="hidden-xs">Shopping Bag</span> </a>
  						</li>
  					</ul>
  				</div>
  			</div>
  		</div>
  		<div className="col-md-9 order-content">

  		<div className="form_main col-md-4 col-sm-5 col-xs-7">
          <h4 className="heading"><strong>Personal </strong> Contact <span></span></h4>
          <div className="form">
          <form action="" method="" id="contactFrm" name="contactFrm">
              <input type="text" required="" placeholder="Name" value="" name="name" className="txt" />
              <input type="text" required="" placeholder="Email" value="" name="email" className="txt" />
              <input type="password" required="" placeholder="Change Pwd" value="" name="password" className="txt" /><br />
              <button type="button" className="btn btn-default">Update</button>
          </form>
      </div>
      </div>
  	  </div>
  	</div>
  </div>
    )
  }
}
