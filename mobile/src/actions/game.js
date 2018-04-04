

export const GAME_MAIN_GET = 'GAME_MAIN_GET';
export const GAME_RESULT_GET = 'GAME_RESULT_GET';
export const GAME_DETAIL_GET = 'GAME_DETAIL_GET';

export const gameMain = (data) => {
	return {
		type: GAME_MAIN_GET,
		data
	};
}

export const gameResult = (data, status) => {
	return {
		type: GAME_RESULT_GET,
		data,
		status
	};
}

export const gameDetail = (data, status) => {
	return {
		type: GAME_DETAIL_GET,
		data
	};
}
