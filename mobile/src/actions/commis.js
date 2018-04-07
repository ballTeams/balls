
export const COMMIS_MAIN_GET = 'COMMIS_MAIN_GET';


export let commisMain = (data) => {
	return {
		type: COMMIS_MAIN_GET,
		data
	}
}