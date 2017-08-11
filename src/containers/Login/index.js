import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import {connect} from 'react-redux';
import {login} from '../../actions/userActions';
import './index.css';
import { Layout } from 'antd';
import PremierLeagueLogo from './Premier_League_Logo.svg.png';
const { Header, Footer, Sider, Content } = Layout;

const FormItem = Form.Item;


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (data) => {
        this.props.dispatch(login());
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id="components-form-demo-normal-login">
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={8}>
                        <img alt="example" width="100%" src={PremierLeagueLogo} />
                    </Col>
                </Row>
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={8}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please input your Password!'}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                           placeholder="Password"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;