import React,{ Component } from 'react';
import { Link } from 'dva/router';
import styles from './Header.css';

// 公共头部
const Header = React.createClass({
	getInitialState() {
		return {
			username:'dva',
			loginState:false,
		}
	},
	render(){
		return (
			<div className={ styles.header }>
				<span>	
					<Link to="">Home</Link> 
					&nbsp; / &nbsp;
					<Link to="users">Users</Link> 
				</span>
				<Link to="/login" className={ styles.fr }>登录</Link>

			</div>
		);
	}
});

export default Header