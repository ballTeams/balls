import { setCookie, delCookie, getCookie, hashUrl, getUrlParam, vaildRoute } from '@agent/utils/utils';
import net from '@agent/utils/net';
import { routeConfig } from './routes.js';
import { Toast } from 'antd-mobile';
import Toasts from '@common/js/components/Toasts/Toasts';
const AUTH_TO = "/auth/get-url.json";
const AUTH_BACK = "/auth/get-code.json";
const AUTH_AGENT_BELONG = "/agent/default/set-data.json";
/**
 * 重定向到授权登录
 */
export const redirectToAuth = (nextState) => {
	let cur_admin_id = getUrlParam('admin_id');
	let { admin_id } = getCookie("admin") || {};
	let param = {
		url: `${nextState.location.pathname}${nextState.location.search}`,
		wx_type: "agent",
		admin_id: cur_admin_id || admin_id || ''
	};
	net.ajax({
		url: AUTH_TO,
		type: 'GET',
		param,
		success: (res) => {
			// 设置Cookie 交给后端设置
			// let url = `http://${location.hostname}:88/auth?url=${nextState.location.pathname}${nextState.location.search}`;
			location.href = res.data.url; // open.weixin.com?....
		},
		error: (res) => {
			Toasts.info(res.msg, 1.5);
		}
	});
	
};
/**
 * 未登录
 * 成功设置cookie，
 * error就去跳转到授权页面
 */
const promiseAuthCb = () => {
	return new Promise((resolve, reject) => {
		let param = {
			code: getUrlParam('code')
		};
		net.ajax({
			url: AUTH_BACK,
			type: 'GET',
			param,
			success: (res) => {
				// 设置Cookie 交给后端设置
				resolve(res);
			},
			error: (res) => {
				Toasts.info(res.msg, 1.5);
				reject(res);
			}
		});
	});
};
/**
 * 全局请求
 */
const promiseGlobalCb = () => {
	return new Promise((resolve, reject) => {
		console.log("等待1s，异步模拟全局配置数据中....，这里需要修改哦");
		setTimeout(() => { // 模拟假数据，请求方式参考promiseAuthCb
			resolve({ test: 1 });
			console.log("1s 结束了");
		}, 1000);
	});
};
/**
 * 获取用户的登录状态信息
 * @param nextState 
 */
export const loggedIn = (nextState) => {
	let state = false; // 未登录
	let authInfo = getCookie('ball');
	if (authInfo) {
		state = true;
	}
	return state;
};
/**
 * 产品线归属设置
 */
const promiseAgentBelong = (nextState) => {
	let cur_admin_id = getUrlParam('admin_id');
	let { admin_id } = getCookie("admin") || {};
	return new Promise((resolve, reject) => {
		if ((cur_admin_id != null && cur_admin_id != admin_id)) {
			let param = {
				admin_id: cur_admin_id
			};
			net.ajax({
				url: AUTH_AGENT_BELONG,
				type: 'GET',
				param,
				success: (res) => {
					//　后端设置cookie
					resolve();
				},
				error: (res) => {
					Toasts.info(res.msg);
					//　后端删除cookie
					if (_global.device.weixin && process.env.NODE_ENV === "production") {
						// redirectToAuth(nextState);
						reject('已登录，set `admin_id` error');
					} else {
						resolve();
					}
				}
			});
		} else {
			// 没带或者一样，直接通过
			resolve();
		}
	});
};

/**
 * 重定向路由-用户已登录-用户端首页
 */
export const redirectToIndex = async (nextState, replace, callback) => {
	
	if (loggedIn(nextState)) { 
		// 指定链接，否则之前授权后再授权的就会去‘/’
		replace('/');
		callback();
	} else {
		try {
			let res = await promiseAuthCb();
			// _global.config = await promiseGlobalCb();
			// replace(`${res.data.url || '/'}`);
			location.href = `${res.data.url || '/'}`; // wechat share hack
			callback();
		} catch (err) {
			// redirectToAuth(nextState);
			callback('未登录');
		}
	}
};


/**
 * 只需授权
 */
export const onlyToAuth = async (nextState, replace, callback) => {
	if (!loggedIn(nextState) && _global.device.weixin && process.env.NODE_ENV === "production") { // 未登陆（未授权）
		// 去授权登录
		redirectToAuth(nextState);
		callback('未登录');
		return;
	}
	try {
		callback();
	} catch (err) {
		callback('onlyToAuth Error');
	}
};

