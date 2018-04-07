import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import LOGO from '../../styles/LOGO.png';
import BG from '../../styles/wapindex.jpg';
import './Login.scss';
import api from 'api/login';
import ajax from 'utils/ajax';
import { setCookie, getCookie } from 'utils/utils';
class Form extends Component {

    constructor (props){
        super(props);
        this.state = {
            name: '',
            password: '',
            yzm: '',
        };
    }

    componentWillMount () {

    }
    handleLogin = () => {
        const { name, password } = this.state;
        ajax({
            url: api.LOGIN_MAIN_POST,
            data: {name: name, password: password},
            method: 'POST',
            success: (res) => {
                Toast.info(res.msg, 1, () => {
                    if (res.status){
                        setCookie('balls', JSON.stringify(res.data));
                        this.props.router.push('/home');
                    }
                });
                
            }, 
            error: (res) => {
                Toast.info(res.msg, 1);
            }
        });
    }
    render () {
        let style = {
            height: '100vh',
            background: `url(${BG})`,
            backgroundSize: '100%' 
        };
        return (
            <div className="v-login g-pd-20" style={style}>
                <div className="g-flex-cc g-pd-20"><img className="g-img-60" src={LOGO}/></div>
                <div className="_input">
                    <input onChange={(e) => {
                        this.setState({
                            name: e.target.value
                        });
                    }} type="text" placeholder="用户名"/>
                </div>
                <div className="_input">
                    <input onChange={(e) => {
                        this.setState({
                            password: e.target.value
                        });
                    }} type="text" placeholder="密码"/>
                </div>
                <div className="_input _yzm g-flex-ac">
                    <input onChange={(e) => {
                        this.setState({
                            yzm: e.target.value
                        });
                    }} type="text" placeholder="验证码"/>
                    <div className="_yzm-img">
                        <img />
                    </div>
                </div>
                <div className="g-pd-tb-20">
                    <div onClick={this.handleLogin} className="_btn-blue">登陆</div>
                </div>
            </div>
        );
    }
}

export default Form;

