import React, { Component } from 'react';
import { Link } from 'dva/router';
import styles from './Header.css';

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
                <a href="/">首页</a>
                &nbsp; / &nbsp;
                <a href="/module-1">模块 - 1</a>
                &nbsp; / &nbsp;
                <a href="/login">登录</a>
            </div>
        );
    }
}

export default Header
