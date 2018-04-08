import React, { Component } from 'react';
import { Link } from 'react-router';
import { Modal, Toast } from 'antd-mobile';
import api from 'api/finance';
import ajax from 'utils/ajax';
class DemoList extends Component {

    constructor (props){
        super(props);
        this.state = {
            name: '',
            apply_amount: '',
            trade_password: '',
            show: 2
        };
    }

    componentWillMount () {
        this.loadData();
    }
    loadData = () => {
        ajax({
            url: api.FINANCE_CHANGE_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                console.log(res, 1);
                Toast.info(res.msg, 1, () => {
                    this.setState = {
                        name: res.data.name,
                        apply_amount: res.data.apply_amount,
                        trade_password: res.data.trade_password,
                        show: 1
                    };
                });
            }, 
            error: (res) => {
                console.log(res);
                Toast.info(res.msg, 1);
            }
        });
    }
    handleClick = () => {
        ajax({
            url: api.FINANCE_CHANGE_POST,
            data: {
                ...this.state
            },
            method: 'POST',
            success: (res) => {
                console.log(res, 1);
                Toast.info(res.msg, 1, () => {
                    this.setState = {
                        name: '',
                        apply_amount: '',
                        trade_password: ''
                    };
                });
            }, 
            error: (res) => {
                console.log(res);
                Toast.info(res.msg, 1);
            }
        });
    }
    render () {
        return (
            <div className="g-pd-10">
                <div className="g-bg-main g-pd-10">
                    <div className="g-lh-44">转账</div>
                    {
                        this.state.show == 2 ?
                        (
                            <div>
                                <input 
                                    style={{ width: '100%' }} 
                                    className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                    placeholder="请填写转入代理的账号"
                                    type="text"
                                    value={this.state.name}
                                    onChange={(e) => {
                                        this.setState({
                                            name: e.target.value
                                        });
                                    }}
                                />
                                <input 
                                    style={{ width: '100%' }} 
                                    className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                    placeholder="转出点数"
                                    type="number"
                                    value={this.state.apply_amount}
                                    onChange={(e) => {
                                        this.setState({
                                            apply_amount: e.target.value
                                        });
                                    }}
                                />
                                <input 
                                    style={{ width: '100%' }} 
                                    type="password"
                                    className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                    placeholder="交易密码"
                                    value={this.state.trade_password}
                                    onChange={(e) => {
                                        this.setState({
                                            trade_password: e.target.value
                                        });
                                    }}
                                />  
                                <div onClick={this.handleClick} className="g-lh-34 g-bg-blue g-tc">立即转出</div>  
                            </div>    
                        )
                        :
                        (
                            <div className="g-tl">
                                <div className="g-pd-t-10">
                                    转入代理的账号: {this.state.name}
                                </div>  
                                <div className="g-pd-t-10">
                                    转出点数: {this.state.apply_amount}
                                </div>          
                            </div>
                        )
                    }
                      
                </div>
                
            </div>
        );
    }
}
export default DemoList;

