import React, { Component } from 'react';
import { Modal, Toast } from 'antd-mobile';
import { Link } from 'react-router';
import api from 'api/game';
import ajax from 'utils/ajax';
import './GameDetail.scss';
class Form extends Component {

    constructor (props){
        super(props);
        this.state = { 
            showModal: false,
            charge: '',
            name: '',
            showMoney: '',
            point: ''
        };
    }

    componentWillMount () {
       this.loadData(this.props.location.query.id);
    }
    loadData = (id) => {
        const { actions } = this.props;
        ajax({
            url: api.GAME_DETAIL_GET,
            data: {
                ball_match_id: id 
            },
            method: 'GET',
            success: (res) => {
                actions.gameDetail(res.data);
            }, 
            error: (res) => {

            }
        });
    }
    handleClick = (charge, name, money, ball_match_id, match_info_id) => {
        this.setState({
            showModal: true,
            charge: charge,
            name: name,
            showMoney: '',
            point: '',
            money: money,
            match_info_id: match_info_id,
            ball_match_id: ball_match_id
        })
    }
    handleModalClick = (item) => {
        console.log(this.state.money - this.state.charge)
        this.setState({
            point: item,
            showMoney: item * ( this.state.money - this.state.charge ) / 100
        })
    }
    handleOk = () => {
        const { name, ball_match_id, money, charge, match_info_id, point } = this.state;
        console.log(this.state);
        ajax({
            url: api.GAME_DETAIL_SAVE_POST,
            data: {
                ball_match_id: ball_match_id, 
                buy_result: name,
                buy_money: point,
                match_info_id: match_info_id,
                money: money,
                charge: charge
            },
            method: 'POST',
            success: (res) => {
                Toast.info(res.msg, 1, () => {
                    this.setState({
                        showModal: false,
                    })
                });
                
            }, 
            error: (res) => {
                Toast.info(res.msg, 1);
            }
        });
    }
    render () {
        const { info } = this.props;
        const {
            match_name = '',
            list = []
        } = info;
        const arr = [1000, 5000, 10000, ];
        return (
            <div className="g-pd-10 v-game-detail">
                <div className="g-c-white g-bg-main">
                    <div className="g-fs-20 g-tc g-pd-tb-10">{match_name}</div>
                    {
                        list.map((item, index) => {
                            const {
                                type_name,
                                charge,
                                content = [],
                                match_info_id,
                                ball_match_id
                            } = item;
                            return (
                                <div className="g-pd-b-20 g-pd-lr-10" key={index}>
                                    <div className="g-flex-ac">
                                        <div className="g-col g-fs-24">{type_name}</div>
                                        <div>手续费-获利：{charge}%</div>
                                    </div>
                                    <table className="_table">
                                        <thead>
                                            <tr>
                                                <th>选项</th>
                                                <th>收益%</th>
                                                <th>可交易量</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                               content.map((val, i) => {
                                                    const {
                                                        money,
                                                        name,
                                                        num
                                                    } = val;
                                                    return (
                                                        <tr 
                                                            key={`${index}_${i}`} 
                                                            onClick={() => this.handleClick(charge, name, money, ball_match_id, match_info_id)}
                                                        >
                                                            <td>{name}</td>
                                                            <td>{money}%</td>
                                                            <td>{num}</td>
                                                        </tr>
                                                    );
                                               }) 
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })
                    }
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
                        title="波胆下单"
                        footer={[{ text: '确定', onPress: this.handleOk }]}
                    >
                        <div style={{ minHeight: 100, maxHeight: 400, overflow: 'scroll' }}>
                            <div className="g-fs-20 g-tc g-pd-tb-10">{match_name}</div>
                            <div>您正在反对全场比分： {this.state.name}</div>
                            <div className="g-flex-ac g-tc g-pd-tb-10 g-b">
                                <div className="g-col">
                                    <input 
                                        onChange={(e) => {
                                            this.setState({
                                                point: e.target.point
                                            });
                                        }}
                                        className="g-b g-lh-34 g-pd-l-5"
                                        style={{ width: 60 }}
                                        type="text"
                                        value={this.state.point} 
                                        placeholder="交易点数"/>
                                </div>
                                <div className="g-col">
                                    <div>收益率</div>
                                    <div>{this.state.charge}</div>
                                </div>
                                <div className="g-col">
                                    <div>预期利润</div>
                                    <div>{this.state.showMoney}</div>
                                </div>
                            </div>
                            <div className="g-flex-ac g-pd-t-10">
                                {
                                    arr.map((item, index) => {
                                        return (
                                            <div 
                                                key={item}
                                                onClick={() => this.handleModalClick(item)}
                                                className="g-bg-blue g-pd-lr-10 g-m-r-10"
                                            >{item}</div>
                                        );
                                    })
                                }
                                <div className="g-c-blue">全部</div>
                            </div>
                        </div>
                    </Modal>
                    
                </div>
            </div>
        );
    }
}

export default Form;

