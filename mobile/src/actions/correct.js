
export const CORRECT_MAIN_GET = 'CORRECT_MAIN_GET';

export let correntMain = (data) => {
	return {
		type: CORRECT_MAIN_GET,
		data
	}
}