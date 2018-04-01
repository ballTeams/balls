import React, { Component } from 'react';
import { } from 'antd-mobile';
import LOGO from '../../styles/LOGO.png';
import BG from '../../styles/wapindex.jpg';
import './Login.scss';
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
                    <div className="_btn-blue">登陆</div>
                </div>
            </div>
        );
    }
}

export default Form;

