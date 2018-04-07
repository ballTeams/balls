import request from 'superagent';
import { Toast } from 'antd-mobile';
import { browserHistory } from 'react-router';
import { delCookie } from 'utils/utils';
const ajax = (obj) => {
	const {
		url, 
		method = 'GET',
		data,
		success, 
		error,
		type 
	} = obj;
	if (method == 'POST') {
		  request.post(url)
		  	.withCredentials()
		    .send({ ...data })
		    .then((res) => {
		    	if(JSON.parse(res.text).status == 1){
		    		success && success(JSON.parse(res.text));
		    	} else if(JSON.parse(res.text).status == -1) {
		    		Toast.info(JSON.parse(res.text).msg, 1, () => {
		    			delCookie('balls');
                        browserHistory.push('/login');
                    });
		    	} else {

		    		error && error(res.text);
		    	}
				
		    })
		    .catch((res) => {
		    	error && error(res.text);
		    });
	} else if (method == 'GET'){
		request.get(url)
			.withCredentials()
			.query({ ...data })
			.then((res) => {
		    	if(JSON.parse(res.text).status == 1){
		    		success && success(JSON.parse(res.text));
		    	} else if(JSON.parse(res.text).status == -1) {
		    		Toast.info(JSON.parse(res.text).msg, 1, () => {
		    			delCookie('balls');
                        browserHistory.push('/login');
                    });
		    	} else {

		    		error && error(res.text);
		    	}
		    })
			.catch((res) => {
		    	error && error(res.text);
		    });
	}
	
}

const ajaxs = (obj) => {
	const {
		// url, 
		method = 'GET',
		// data,
		success, 
		error,
		type,
		otherscb
	} = obj;
	let paramObj = obj.data;
	let url = obj.url;
	let xhr = new XMLHttpRequest();
	let onDataReturn = data => {
			// 正常流程
			switch (data.status) {
				case 1:
				// case true:
					success && success(data);
					return;
				case 0:
				// case false:
					error && error(data);
					return;
				default:
					otherscb && otherscb(data, success, error);
			}
		};
	try {
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						let data = JSON.parse(xhr.responseText);
						onDataReturn(data);
					} catch (e) {
						let msg = "网络不稳定，请稍后重试.";
						if (_global.tag === true) return;
						error && error({
							retcode: xhr.status,
							msg: msg
						});

					}
				} else {
					error && error({
						retcode: xhr.status,
						msg: '网络不稳定，请稍后重试..'
					});
				}
			}
		};

		let paramArray = [],
			paramString = '';
		for (let key in paramObj) {
			/**
			 * 过滤掉值为null,undefined,''情况
			 */
			if (paramObj[key] || paramObj[key] === false || paramObj[key] === 0) {
				paramArray.push(key + '=' + encodeURIComponent(paramObj[key]));
			}
		}

		let req = '';
		switch (method){
			case 'PUT':
			case 'POST':
				req = JSON.stringify(paramObj);
				break;
			case 'DELETE':
			case 'GET':
				if (paramArray.length > 0) {
					url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
				}
				break;
			default:
				break;
		}
		xhr.open(method, url, true);
		xhr.withCredentials = true; // 允许发送cookie
		// 跨域资源请求会发生两次 一次是204 可以参考cors // 无视就好
		// xhr.setRequestHeader(
		// 	'Content-Type', 'application/x-www-form-urlencoded'
		// );
		xhr.setRequestHeader(
			'X-Requested-With', 'XMLHttpRequest'
		);
		xhr.send(method == 'POST' ? req : '');

	} catch (e) {
		console.error(e);
	}
}
export default ajax;