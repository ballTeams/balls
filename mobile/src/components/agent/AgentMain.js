import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import { Link } from 'react-router';
import Item from '../_common/Item/Item';
import './Agent.scss';
import api from 'api/agent';
import ajax from 'utils/ajax';
class ResultList extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {
        ajax({
            url: api.AGENT_MAIN_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                 console.log(res, 1);
                if (res.status){
                    this.props.actions.agentMain(res.data);
                } else {
                    Toast.info(res.msg, 1);
                }
            }, 
            error: (res) => {
                console.log(res, 2);
            }
        });
    }

    render () {
        const { agent } = this.props;
        const { list } = agent;
        return (
            <div className="g-c-white g-pd-lr-10 g-pd-t-10 v-agent">
                <div className="g-flex-ac g-tc g-pd-10 _item">
                    <div className="g-col">
                        <div>分享代理</div>
                        <div>0</div>
                    </div>
                    <div className="g-col">
                        <div>代理总数</div>
                        <div>0</div>
                    </div>
                </div>
                <div className="g-pd-tb-20 g-flex-ac">
                    <input className="g-pd-10" placeholder="输入代理账号" /> 
                    <div className="g-pd-lr-20">
                        <span className="g-bg-blue g-pd-10">搜索</span>
                    </div>
                </div>
                <div className="g-bg-main">
                    <table style={{ width: '100%', tableLayout: 'fixed' }} className="gm-table">
                        <thead>
                            <tr>
                                <th>账号</th>
                                <th>电话</th>
                                <th>返回注册点</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => {
                                    const { name, mobile, percent } = item;
                                    return (
                                        <tr key={index}>
                                            <td>{name}</td>
                                            <td>{mobile}</td>
                                            <td>{percent}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ResultList;

