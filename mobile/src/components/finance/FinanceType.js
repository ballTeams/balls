import React, { Component } from 'react';
import { Link } from 'react-router';
import { Modal, Toast, Picker, List, Accordion } from 'antd-mobile';
import api from 'api/finance';
import ajax from 'utils/ajax';
class Out extends Component {

    constructor (props){
        super(props);
        console.log(props, 'props')
        this.state = {
            type: 1,
            bankOne: '',
            bankTwo: '',
            bankThree: '',
            bankFrou: '',
            zfbOne: '',
            zfbTwo: ''
        };
    }

    componentWillMount () {
        this.loadData();
    }
    loadData = () => {
        ajax({
            url: api.FINANCE_TYPE_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                this.props.actions.financeType(res.data)
            }, 
            error: (res) => {
                Toast.info(res.msg, 1);
            }
        });
    }
    handleSave = () => {
        const {
            type,
            bankOne,
            bankTwo,
            bankThree,
            bankFrou,
            zfbOne,
            zfbTwo
        } = this.state;
        let account = {};
        if ( type == 1 ){
            account = {
                bankOne,
                bankTwo,
                bankThree,
                bankFrou,
            }
        } else {
            account = {
                zfbOne,
                zfbTwo
            }
        }
        ajax({
            url: api.FINANCE_TYPE_GET,
            data: {
                type,
                account
            },
            method: 'POST',
            success: (res) => {
                Toast.info(res.msg, 1);
            }, 
            error: (res) => {
                Toast.info(res.msg, 1);
            }
        });
    }
    handleChange = (e) => {
        const { type } = this.props;
        this.setState({
            type: e
        })
    }
    render () {
        return (
            <div className="g-pd-10">
                <div className="g-bg-main g-pd-10">
                    <div className="g-lh-44">我的提现方式</div>
                    <div>
                        <Accordion accordion onChange={this.handleChange}>
                            <Accordion.Panel key={1} header="银行卡">
                                <div className="g-pd-10">
                                    <input 
                                        style={{ width: '100%' }} 
                                        className="g-lh-34 g-m-b-10 g-pd-lr-10 g-b"
                                        placeholder="银行名称 如：中国银行"
                                        value={this.state.bankOne}
                                        onChange={(e) => this.setState({
                                            bankOne: e.target.value
                                        })}
                                    />
                                    <input 
                                        style={{ width: '100%' }} 
                                        className="g-lh-34 g-m-b-10 g-pd-lr-10 g-b"
                                        placeholder="开户 如：XX省XX市XX路XX支行"
                                        value={this.state.bankTwo}
                                        onChange={(e) => this.setState({
                                            bankTwo: e.target.value
                                        })}
                                    />
                                    <input 
                                        style={{ width: '100%' }} 
                                        className="g-lh-34 g-m-b-10 g-pd-lr-10 g-b"
                                        placeholder="银行卡号"
                                        value={this.state.bankThree}
                                        onChange={(e) => this.setState({
                                            bankThree: e.target.value
                                        })}
                                    />
                                    <input 
                                        style={{ width: '100%' }} 
                                        className="g-lh-34 g-m-b-10 g-pd-lr-10 g-b"
                                        placeholder="开户人姓名"
                                        value={this.state.bankFrou}
                                        onChange={(e) => this.setState({
                                            bankFrou: e.target.value
                                        })}
                                    />
                                    <div onClick={this.handleSave} className="g-lh-34 c-bg-orange g-tc">确认保存</div>
                                </div>
                            </Accordion.Panel>
                            <Accordion.Panel key={2} header="支付宝">
                                <div className="g-pd-10">
                                    <input 
                                        style={{ width: '100%' }} 
                                        className="g-lh-34 g-m-b-10 g-pd-lr-10 g-b"
                                        placeholder="支付宝账户"
                                        value={this.state.zfbOne}
                                        onChange={(e) => this.setState({
                                            zfbOne: e.target.value
                                        })}
                                    />
                                    <input 
                                        style={{ width: '100%' }} 
                                        className="g-lh-34 g-m-b-10 g-pd-lr-10 g-b"
                                        placeholder="姓名"
                                        value={this.state.zfbTwo}
                                        onChange={(e) => this.setState({
                                            zfbTwo: e.target.value
                                        })}
                                    />
                                    <div onClick={this.handleSave} className="g-lh-34 c-bg-orange g-tc">确认保存</div>
                                </div>
                            </Accordion.Panel>
                        </Accordion>
                    </div>    
                </div>
                
            </div>
        );
    }
}
export default Out;

