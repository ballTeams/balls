import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import demo from './demo';
import login from './login';
import home from './home'; // 菜单
import game from './game'; // 赛事列表
import rule from './rule'; // 平台规则
import deal from './deal'; // 交易明细
import correct from './correct'; // 波胆记录
import agent from './agent'; // 代理
import commission from './commission'; // 佣金
import notice from './notice'; // 公告
import finance from './finance'; // 财务
import web from './web'; // 相关网站
// import service from './service'; // 在线客服
import user from './user'; // 个人资料
// 根reducer
const rootReducer = combineReducers({
    routing: routerReducer,
    demo,
    login,
    home,
    game,
    rule,
    deal,
    correct,
    agent,
    commission,
    notice,
    finance,
    web,
    // service,
    user
});

export default rootReducer;