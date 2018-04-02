import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { Link } from 'react-router';
import Item from '../_common/Item/Item';
import './Agent.scss';
class ResultList extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {

    }

    render () {
        const arr = [1, 2, 3, 4, 5, 6];
        return (
            <div className="g-c-white g-pd-lr-20 g-pd-t-10 v-agent">
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
                <table style={{ width: '100%', tableLayout: 'fixed' }} className="g-fs-16 g-bg-main">
                    <thead>
                        <tr>
                            <th>账号</th>
                            <th>电话</th>
                            <th>代理级别</th>
                            <th>返回注册点</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item}</td>
                                        <td>{item}</td>
                                        <td>{item}</td>
                                        <td>{item}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ResultList;

