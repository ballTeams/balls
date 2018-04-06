
export const NOTICE_MAIN_GET = 'NOTICE_MAIN_GET';

export let noticeMain = (data) => {
	return {
		type: NOTICE_MAIN_GET,
		data
	}
}