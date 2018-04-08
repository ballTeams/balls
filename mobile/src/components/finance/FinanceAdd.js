import React, { Component } from 'react';
import { Link } from 'react-router';
import { Modal, Toast } from 'antd-mobile';
import api from 'api/finance';
import ajax from 'utils/ajax';
class Add extends Component {

    constructor (props){
        super(props);
        this.state = {
            apply_amount: '',
            showModal: false,
            bank_name: '',
            bank_number: '',
            bank_person_name: '',
            apply_info: {},
            bank_info: {}
        };
    }

    componentWillMount () {
        this.loadData();
    }
    loadData = () => {
        ajax({
            url: api.FINANCE_ADD_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                Toast.info(res.msg, 1, () => {
                    this.setState({
                        showModal: true,
                        apply_amount: '',
                        //打款账户 银行卡号 收款人
                        bank_info: res.data.bank_info,
                        apply_info: res.data.apply_info
                    })
                });
                
            }, 
            error: (res) => {
                Toast.info(res.msg, 1);
            }
        });
    }
    handleSure = () => {
        const { apply_amount, bank_name, bank_number, bank_person_name } = this.state;
        if(apply_amount < 100){
            Toast.info('请输入充值点数100起', 1);
            return false;
        }
        if (!bank_name || !bank_number || !bank_person_name){
            Toast.info('请将信息填写完整', 1);
            return false;
        }
        ajax({
            url: api.FINANCE_ADD_POST,
            data: {
                apply_amount,
                bank_name,
                bank_number,
                bank_person_name
            },
            method: 'POST',
            success: (res) => {
                this.loadData();
            }, 
            error: (res) => {
                Toast.info(res.msg, 1);
            }
        });
    }

    handleOk = () => {

    }
    render () {
        return (
            <div className="g-pd-10">
                <div className="g-bg-main g-pd-10">
                    <div className="g-lh-44">充值</div>
                    {!this.state.showModal ? 
                        (
                            <div>
                                <input 
                                    style={{ width: '100%' }} 
                                    value={this.state.apply_amount}
                                    onChange={(e) => {
                                        this.setState({
                                            apply_amount: e.target.value
                                        })
                                    }}
                                    className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                    placeholder="请输入充值点数100起"
                                />
                                <input 
                                    style={{ width: '100%' }} 
                                    value={this.state.bank_name}
                                    onChange={(e) => {
                                        this.setState({
                                            bank_name: e.target.value
                                        })
                                    }}
                                    className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                    placeholder="请输入打款账户"
                                />
                                <input 
                                    style={{ width: '100%' }} 
                                    value={this.state.bank_number}
                                    onChange={(e) => {
                                        this.setState({
                                            bank_number: e.target.value
                                        })
                                    }}
                                    className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                    placeholder="请输入银行卡号"
                                />
                                <input 
                                    style={{ width: '100%' }} 
                                    value={this.state.bank_person_name}
                                    onChange={(e) => {
                                        this.setState({
                                            bank_person_name: e.target.value
                                        })
                                    }}
                                    className="g-lh-34 g-m-b-10 g-pd-lr-10"
                                    placeholder="请输入收款人"
                                />
                                <div onClick={this.handleSure} className="c-bg-orange g-tc g-lh-34">确认充值</div> 
                            </div>
                        )
                    :
                        (
                            <div className="g-tl">
                                <div className="g-pd-t-10">
                                    打款点数: {this.state.apply_info.apply_amount}
                                </div>  
                                <div className="g-pd-t-10">
                                    打款账户: {this.state.bank_info.bank_name}
                                </div>  
                                <div className="g-pd-t-10">
                                    银行卡号: {this.state.bank_info.bank_number}
                                </div>  
                                <div className="g-pd-t-10">
                                    收款人: {this.state.bank_info.bank_person_name}
                                </div>            
                            </div>
                        )
                    }          
                </div>
            </div>
        );
    }
}
export default Add;

