import React, { Component } from 'react';
import { Link } from 'dva/router';
import styles from './Header.css';
import './test.css';

// 公共头部
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: 'dva1',
            loginState: false,
        };
    };

    render() {
        return (
            <div className={ styles.header }>
                <span className="home">  
                    <Link to="">Home</Link> 
                    &nbsp; / &nbsp;
                    <Link to="users">Users</Link> 
                </span>
                <Link to="/login" className="fr">登录</Link>
            
            </div>
        );
    }
}

export default Header
