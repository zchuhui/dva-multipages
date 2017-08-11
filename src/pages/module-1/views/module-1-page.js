import React from 'react';
import { Link } from 'dva/router';

class Module1Page extends React.Component {


    render(){
        return(
            <div>
                <div>
                    <Link to='/'>模块1</Link> &nbsp;/&nbsp; <Link to='/module-1-1'>模块-1-1</Link>
                </div>
                <h1 style={{padding:'100px 0',textAlign:'center'}}>模块1</h1>
            </div>
        )
    }
}

export default Module1Page;