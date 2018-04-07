// import { IndexRoute, Route } from 'react-router';
import { redirectToLogin } from './auth';
import { getCookie } from 'utils/utils';
// 页面模块引入
import Demo from '../contaniers/demo'; // 
import Login from '../contaniers/login'; // 登录
import Home from '../contaniers/home'; // 菜单
import Game from '../contaniers/game'; // 赛事列表
import Rule from '../contaniers/rule'; // 平台规则
import Deal from '../contaniers/deal'; // 交易明细
import Correct from '../contaniers/correct'; // 波胆记录
import Agent from '../contaniers/agent'; // 代理
import Commission from '../contaniers/commis'; // 佣金
import Notice from '../contaniers/notice'; // 公告
import Finance from '../contaniers/finance'; // 财务
import Web from '../contaniers/web'; // 相关网站
import Services from '../contaniers/service'; // 在线客服
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
        },
        onEnter: redirectToLogin
    },
    {
        path: '/login',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Login);
            });
        },
        onEnter: () => {}
    },
    {
        path: '/home',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Home);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/game(/:page)(?:page)',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Game);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/rule',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Rule);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/deal',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Deal);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/correct',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Correct);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/agent(/:page)',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Agent);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/commission',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Commission);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/notice',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Notice);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/finance(/:page)',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Finance);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/web',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Web);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/services',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Services);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/user',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, User);
            });
        },
        onEnter: redirectToLogin
    },
    {
        path: '/*',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, User);
            });
        },
        onEnter: (nextState, replace, callback) => {
            const balls = JSON.parse(getCookie('balls'));
            if (!balls) {
                replace({ pathname: '/login' });
                callback();
            } else {
                const pathname = nextState.location.pathname;
                replace({ pathname: '/home' });
                callback();
            }
        }
    }
];

export default routes;
