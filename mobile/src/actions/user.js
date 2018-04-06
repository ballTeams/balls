
export const USER_MAIN_GET = 'USER_MAIN_GET';

export let userMain = (data) => {
	return {
		type: USER_MAIN_GET,
		data
	}
}