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
            apply_info: {},
            bank_info: {}
        };
    }

    componentWillMount () {

    }
    handleSure = () => {
        if(this.state.apply_amount < 100){
            Toast.info('请输入充值点数100起', 1);
            return false;
        }
        ajax({
            url: api.FINANCE_ADD_POST,
            data: {
                apply_amount: this.state.apply_amount 
            },
            method: 'POST',
            success: (res) => {
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
                    <div onClick={this.handleSure} className="c-bg-orange g-tc g-lh-34">确认充值</div>                
                </div>
                <Modal
                        visible={this.state.showModal}
                        transparent
                        closable
                        maskClosable={false}
                        onClose={() => {
                            this.setState({
                                showModal: false
                            })
                        }}
                        title="确定充值"
                        footer={[{ text: '确定', onPress: () => {
                            this.setState({
                                showModal: false
                            })
                        } }]}
                    >
                        <div className="g-tl" style={{ minHeight: 100, maxHeight: 400, overflow: 'scroll' }}>
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
                    </Modal>
            </div>
        );
    }
}
export default Add;

