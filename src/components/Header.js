import React from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => (
<React.Fragment>
			<div>
			<img src={logo} className="App-logo d-flex justify-content-center" alt="logo" />
			<h1 className="d-flex justify-content-center">Code Challenge for Flightright Role</h1>
			</div>
</React.Fragment>
);

export default Header