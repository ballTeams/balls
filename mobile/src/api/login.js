import APIROOT from './root';
const api = {
	LOGIN_MAIN_POST: '/login/index',
	LOGOUT_MAIN_GET: '/login/out',
	COMMOM_NOTICE_GET: '/site/message'
};

export default APIROOT(api);

