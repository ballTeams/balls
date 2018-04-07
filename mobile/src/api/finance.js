import APIROOT from './root';

const api = {
	FINANCE_ADD_POST: '/apply/add',
	FINANCE_ADD_GET: '/apply/add',
	FINANCE_OUT_POST: '/apply/withdraw',
	FINANCE_OUT_GET: '/apply/withdraw',
	FINANCE_TYPE_GET: '/user/account-list',
	FINANCE_MAIN_GET: '/apply/record', // 交易记录
	FINANCE_CHANGE_POST: '/apply/transfer'
};

export default APIROOT(api);

