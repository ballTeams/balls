import { setCookie, delCookie, getCookie, getItem } from 'utils/utils';

import { Toast } from 'antd-mobile';

export const redirectToLogin = (nextState, replace, callback) => {
	const balls = JSON.parse(getCookie('balls'));
	if (!balls) {
		replace({ pathname: '/login' });
		callback();
	} else {
		const pathname = nextState.location.pathname;
		// replace({ pathname: '/home' });
		callback();
	}
};


