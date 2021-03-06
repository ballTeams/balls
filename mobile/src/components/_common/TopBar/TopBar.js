import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Accordion, NavBar, Drawer, Icon, NoticeBar, Toast } from 'antd-mobile';
import XZBG from '../../../styles/xzbg1.png';
import api from 'api/login';
import ajax from 'utils/ajax';
import { getCookie, delCookie } from 'utils/utils';
import TopbarBg from 'styles/manin.jpg';
class TopBar extends Component {

    constructor (props){
        super(props);
        this.onOpenChange = this.onOpenChange.bind(this);
        this.state = {
            open: false,
            message: ''
        };
    }

    componentWillMount () {
        ajax({
            url: api.COMMOM_NOTICE_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                this.setState({
                    message: res.data[0].content
                });
                
            }, 
            error: (res) => {
                // Toast.info('网络不稳定，请稍后再试...', 1);
            }
        });
    }
    onOpenChange(){
        this.setState({ open: !this.state.open });
    }
    
    render () {
        const { children = '' } = this.props;
        const arr = [
            {
                title: '市场列表',
                child:[
                    {
                        title: '赛事列表',
                        url: '/game'
                    },
                    {
                        title: '交易明细',
                        url: '/deal'
                    },
                    {
                        title: '波胆纪录',
                        url: '/correct'
                    },
                    {
                        title: '赛事结果',
                        url: '/game/rule'
                    },
                ]
            },
            {
                title: '个人资料',
                child:[],
                url: '/user'
            },
            {
                title: '代理中心',
                child:[
                    {
                        title: '代理列表',
                        url: '/agent'
                    },
                    {
                        title: '新增代理',
                        url: '/agent/add'
                    },
                    {
                        title: '我的佣金',
                        url: '/commission'
                    },
                ],
                url: '/'
            },
            {
                title: '财务管理',
                child:[
                    {
                        title: '充值',
                        url: '/finance/add'
                    },
                    {
                        title: '提现',
                        url: '/finance/out'
                    },
                    {
                        title: '转账',
                        url: '/finance/change'
                    },
                    {
                        title: '交易记录',
                        url: '/finance'
                    },
                    {
                        title: '收款方式',
                        url: '/finance/type'
                    },
                ],
                url: '/'
            },
            {
                title: '相关网站',
                child:[],
                url: '/web'
            },
            {
                title: '公告',
                child:[],
                url: '/notice'
            },
            {
                title: '平台规则',
                child:[],
                url: '/rule'
            },
            {
                title: '在线客服',
                child:[],
                url: '/services'
            },
            {
                title: '登出',
                child:[],
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
            }

        ];
        const balls = JSON.parse(getCookie('balls'));
        // if(!balls){
        //     Toast.info('登录失效', 1, () => {
        //         browserHistory.push('/login');
        //     });
        //     return false;
        // }
        const sidebar = (
            <div className="common-bar">
                    {
                        arr.map((item, index) => {
                            if(item.child.length > 0){
                                return (
                                    <Accordion key={index} >
                                        <Accordion.Panel header={item.title}>
                                            <div className="g-flex g-fd-c" style={{ background: '#000', color: '#fff' }}>
                                                {
                                                    item.child.map((val, i) => {
                                                        return (
                                                            <Link className="g-pd-lr-15 g-lh-44" key={`${val}_${i}`} to={val.url}>{val.title}</Link>
                                                        );
                                                    })  
                                                }
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion>
                                );
                            }else{
                                return (
                                    <div key={index} className="g-lh-44 g-pd-lr-15 g-fs-18">
                                        {
                                            item.onClick ? <div onClick={item.onClick}>{item.title}</div> : <Link to={item.url}>{item.title}</Link>
                                        }
                                    </div> 
                                );
                            }
                        })
                    }
                
            </div>
        );
        return (
            <div>
                <div style={{ position: 'fixed', top: 0, width: '100%', height: 45, zIndex: 1000 }}>
                    <NavBar 
                        style={{ backgroundImage: `url(${TopbarBg})`, backgroundSize: 'cover' }}
                        icon={<Icon type="ellipsis" />} 
                        onLeftClick={this.onOpenChange}
                        rightContent={<div className="g-fs-12 g-tr"><p>{balls.name}</p>余额：{balls.user_has_money}</div>}
                    />
                    
                </div>
                
                <Drawer
                    className=""
                    style={{ height: '100vh' }}
                    contentStyle={{ color: '#A6A6A6' }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    <div style={{ height: 45 }} />
                    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                        {this.state.message}
                    </NoticeBar>
                    <div style={{
                        backgroundRepeat: 'repeat-y',
                        backgroundImage: `url(${XZBG})`,
                        backgroundSize: 'cover',
                        minHeight: window.innerHeight - 79
                    }}>
                        {children}
                    </div>
                   
                </Drawer>
            </div>
        );
    }
}

export default TopBar;

