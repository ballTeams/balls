
export const COMMISSION_MAIN_GET = 'COMMISSION_MAIN_GET';


export let commissionMain = (data) => {
	return {
		type: COMMISSION_MAIN_GET,
		data
	}
}