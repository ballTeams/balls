import React, { Component } from 'react';
import { } from 'antd-mobile';
import { Link } from 'react-router';
import './HomeMain.scss';
class Form extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {

    }

    render () {
        const arr = [
            {
                title: '赛事列表',
                url: '/game'
            },
            {
                title: '交易明细',
                url: '/deal'
            },
            {
                title: '波胆记录',
                url: '/correct'
            },
            {
                title: '赛事结果',
                url: '/game/result'
            },
            {
                title: '新增代理',
                url: '/agent/add'
            },
            {
                title: '代理列表',
                url: '/agent/list'
            },
            {
                title: '我的佣金',
                url: '/commis'
            },
            {
                title: '平台规则',
                url: '/rule'
            },
            {
                title: '登出账号',
                url: '/out',
                onClick: () => {

                }
            },
        ];
        return (
            <div className="g-tc v-home-main">
                {
                    arr.map((item, index) => {
                        return (
                            <div key={`${index}`} className="_item">
                                <Link to={`${item.url}`}>{item.title}</Link>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Form;

