import React from 'react';
import styles from './Login.css';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className = { styles.loginWrap }>
	      <Form onSubmit={this.handleSubmit} className="login-form">
	        <FormItem>
	          {getFieldDecorator('userName', {
	            rules: [{ required: true, message: 'Please input your username!' }],
	          })(
	            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: 'Please input your Password!' }],
	          })(
	            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('remember', {
	            valuePropName: 'checked',
	            initialValue: true,
	          })(
	            <Checkbox>Remember me</Checkbox>
	          )}
	          <a className="login-form-forgot" href="">忘记密码</a>
	          <div>
	          		<Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
	          		 <a href=""> &nbsp; 立刻注册!</a>	
	          </div>
	        </FormItem>
	      </Form>
      </div>
        );
    }
}


export default Form.create()(NormalLoginForm);
