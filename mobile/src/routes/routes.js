// import { IndexRoute, Route } from 'react-router';

// 页面模块引入
import Demo from '../contaniers/demo'; // 
import Login from '../contaniers/login'; // 登录
import Home from '../contaniers/home'; // 菜单
import Game from '../contaniers/game'; // 赛事列表
import Rule from '../contaniers/rule'; // 平台规则
import Deal from '../contaniers/deal'; // 交易明细
import Correct from '../contaniers/correct'; // 波胆记录
import Agent from '../contaniers/agent'; // 代理
// import Commis from '../contaniers/commis'; // 佣金
import Notice from '../contaniers/notice'; // 公告
import Finance from '../contaniers/finance'; // 财务
import Web from '../contaniers/web'; // 相关网站
// import Service from '../contaniers/service'; // 在线客服
import User from '../contaniers/user'; // 个人资料
// 功能函数引入


// 动态路由配置
const routes = [
    {
        path: '/demo',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Demo);
            });
        }
    },
    {
        path: '/login',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Login);
            });
        }
    },
    {
        path: '/home',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Home);
            });
        }
    },
    {
        path: '/game/?(:page)',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Game);
            });
        }
    },
    {
        path: '/rule',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Rule);
            });
        }
    },
    {
        path: '/deal',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Deal);
            });
        }
    },
    {
        path: '/correct',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Correct);
            });
        }
    },
    {
        path: '/agent/(:page)',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Agent);
            });
        }
    },
    // {
    //     path: '/commis',
    //     getComponents(nextState, callback) {
    //         require.ensure([], function(require) {
    //             callback(null, Commis);
    //         });
    //     }
    // },
    {
        path: '/notice',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Notice);
            });
        }
    },
    {
        path: '/finance/(:page)',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Finance);
            });
        }
    },
    {
        path: '/web',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Web);
            });
        }
    },
    // {
    //     path: '/service',
    //     getComponents(nextState, callback) {
    //         require.ensure([], function(require) {
    //             callback(null, Service);
    //         });
    //     }
    // },
    {
        path: '/user',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, User);
            });
        }
    }
];

export default routes;
