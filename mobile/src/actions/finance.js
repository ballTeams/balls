export const FINANCE_TYPE_GET = 'FINANCE_TYPE_GET';
export const FINANCE_MAIN_GET = 'FINANCE_MAIN_GET';

export let financeType = (data) => {
	return {
		type: FINANCE_TYPE_GET,
		data
	}
}

export let financeMain = (data, status) => {
	return {
		type: FINANCE_MAIN_GET,
		data,
		status
	}
}