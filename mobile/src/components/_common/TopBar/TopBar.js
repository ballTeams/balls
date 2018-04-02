import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accordion, NavBar, Drawer, Icon, NoticeBar } from 'antd-mobile';
import XZBG from '../../../styles/xzbg1.png';
class TopBar extends Component {

    constructor (props){
        super(props);
        this.onOpenChange = this.onOpenChange.bind(this);
        this.state = {
            open: false,
        };
    }

    componentWillMount () {

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
                url: '/service'
            },
            {
                title: '登出',
                child:[],
                onClick: () => {

                }
            }

        ];
        const sidebar = (
            <div style={{ minHeight: '100vh', background: '#fff' }}>
                    {
                        arr.map((item, index) => {
                            if(item.child.length > 0){
                                return (
                                    <Accordion key={index} >
                                        <Accordion.Panel header={item.title}>
                                            <div className="g-flex g-fd-c">
                                                {
                                                    item.child.map((val, i) => {
                                                        return (
                                                            <Link className="g-tc g-lh-44 g-bb" key={`${val}_${i}`} to={val.url}>{val.title}</Link>
                                                        );
                                                    })  
                                                }
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion>
                                );
                            }else{
                                return (
                                    <div key={index} className="g-lh-44 g-tc g-bb g-fs-18"><Link to={item.url}>{item.title}</Link></div> 
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
                        icon={<Icon type="ellipsis" />} 
                        onLeftClick={this.onOpenChange}
                    >Basic</NavBar>
                </div>
                <Drawer
                    className="my-drawer"
                    style={{ height: '100vh', marginTop: 45, background: '#fff' }}
                    contentStyle={{ color: '#A6A6A6' }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                        Notice: 2212312
                    </NoticeBar>
                    <div style={{
                        backgroundRepeatY: 'no-repeat',
                        backgroundRepeatX: 'repeat',
                        backgroundImage: `url(${XZBG})`,
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

