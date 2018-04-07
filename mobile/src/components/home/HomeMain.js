import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import { Link, browserHistory } from 'react-router';
import './HomeMain.scss';
import api from 'api/login';
import ajax from 'utils/ajax';
import { getCookie, delCookie } from 'utils/utils';
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
                url: '/agent'
            },
            {
                title: '我的佣金',
                url: '/commission'
            },
            {
                title: '平台规则',
                url: '/rule'
            },
            {
                title: '登出账号',
                url: '/out',
                onClick: () => {
                    ajax({
                        url: api.LOGOUT_MAIN_GET,
                        data: {},
                        method: 'GET',
                        success: (res) => {
                            Toast.info(res.msg, 1, () => {
                                delCookie('balls');
                                browserHistory.push('/login');
                            }); 
                            
                        }, 
                        error: (res) => {
                            Toast.info('网络不稳定，请稍后再试...', 1);
                        }
                    });
                }
            },
        ];
        return (
            <div className="g-tc v-home-main">
                {
                    arr.map((item, index) => {
                        return (
                            <div key={`${index}`} className="_item">
                                {
                                    item.onClick ? <div onClick={item.onClick}>{item.title}</div> : <Link to={`${item.url}`}>{item.title}</Link>
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Form;

