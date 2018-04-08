import React, { Component } from 'react';
import { Link } from 'react-router';
import { Modal, Toast, Picker, List } from 'antd-mobile';
import api from 'api/finance';
import ajax from 'utils/ajax';
class Out extends Component {

    constructor (props){
        super(props);
        this.state = {
            type: '',
            trade_password: '',
            apply_amount: '',
            show: 2
        };
        this.district = [];
    }

    componentWillMount () {
        this.loadData();
    }
    loadData = () => {
         ajax({
            url: api.FINANCE_OUT_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                Toast.info(res.msg, 1, () => {
                    this.setState({
                        show: 1,
                        type: res.data.type,
                        trade_password: res.data.trade_password,
                        apply_amount: res.data.apply_amount
                    })
                });
            }, 
            error: (res) => {
                Toast.info(res.msg, 1, () => {
                    for (let i = 0; i < res.data.length; i++){
                        this.district.push({
                            label: res.data[i].account_name,
                            value: res.data[i].type,
                        });
                    }
                });
            }
        });
    }
    handleChange = (e) => {
        this.setState({
            type: e[0]
        })
    }
    handleOk = () => {
        ajax({
            url: api.FINANCE_OUT_POST,
            data: {
                ...this.state
            },
            method: 'POST',
            success: (res) => {
                Toast.info(res.msg, 1, () => {
                    this.loadData();
                });
                
            }, 
            error: (res) => {
                Toast.info(res.msg, 1);
            }
        });
    }
    render () {
        return (
            <div className="g-pd-10">
                <div className="g-bg-main g-pd-10">
                    <div className="g-lh-44">发起提现</div>
                    {
                        this.state.show == 2 ? 
                            (   
                                 <div>
                                     <input 
                                        style={{ width: '100%' }} 
                                        className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                        placeholder="请输入提现金额"
                                        type="text"
                                        value={this.state.apply_amount}
                                        onChange={(e) => {
                                            this.setState({
                                                apply_amount: e.target.value
                                            })
                                        }}
                                    />
                                    <Picker 
                                        data={this.district} 
                                        cols={1} 
                                        onChange={this.handleChange}
                                        extra="请选择"
                                        value={this.state.type}
                                    >
                                        <List.Item style={{ lineHeight: 34, height: 34 }} arrow="horizontal">收款方式</List.Item>
                                    </Picker>     
                                    <div className="g-tr g-pd-lr-10 g-pd-t-10">
                                        <Link className="g-c-blue" to="/finance/type">管理收款方式</Link>
                                    </div>   
                                    <input 
                                        style={{ width: '100%' }} 
                                        className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                        placeholder="交易密码"
                                        type="password"
                                        value={this.state.trade_password}
                                        onChange={(e) => {
                                            this.setState({
                                                trade_password: e.target.value
                                            })
                                        }}
                                    />  
                                    <div onClick={this.handleOk} className="g-lh-34 g-bg-blue g-tc">立即提现</div>  
                                 </div>
                            )
                            :
                            (
                                <div className="g-tl">
                                    <div className="g-pd-t-10">
                                        提现点数: {this.state.apply_amount}
                                    </div>  
                                    <div className="g-pd-t-10">
                                        打款方式: {this.state.type}
                                    </div>           
                                </div>
                            )
                    }
                      
                </div>
                
            </div>
        );
    }
}
export default Out;

