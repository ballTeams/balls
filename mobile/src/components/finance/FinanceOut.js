import React, { Component } from 'react';
import { Link } from 'react-router';
import { Modal, Toast, Picker, List } from 'antd-mobile';
import api from 'api/finance';
import ajax from 'utils/ajax';
class Out extends Component {

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
            url: api.FINANCE_OUT_POST,
            data: {
                apply_amount: this.state.apply_amount 
            },
            method: 'POST',
            success: (res) => {
                ajax({
                    url: api.FINANCE_OUT_GET,
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
        const district = [
            {
              label: '银行卡',
              value: '1',
            },
            {
              label: '支付宝',
              value: '2',
            },
        ];
        return (
            <div className="g-pd-10">
                <div className="g-bg-main g-pd-10">
                    <div className="g-lh-44">发起提现</div>
                    <input 
                        style={{ width: '100%' }} 
                        className="g-lh-34 g-m-b-10 g-pd-lr-10"
                        placeholder="请输入提现金额"
                    />
                    <Picker data={district} cols={1}>
                        <List.Item style={{ lineHeight: 34, height: 34 }} arrow="horizontal">请选择收款方式</List.Item>
                    </Picker>     
                    <div className="g-tr g-pd-lr-10 g-pd-t-10">
                        <Link className="g-c-blue" to="/finance/type">管理收款方式</Link>
                    </div>   
                    <input 
                        style={{ width: '100%' }} 
                        className="g-lh-34 g-m-b-10 g-pd-lr-10"
                        placeholder="交易密码"
                    />  
                    <div className="g-lh-34 g-bg-blue g-tc">立即提现</div>    
                </div>
                
            </div>
        );
    }
}
export default Out;

