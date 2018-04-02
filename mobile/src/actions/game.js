// export ajax from 'utils/ajax';
// import request from 'superagent';

export const GAME_MAIN_GET = 'GAME_MAIN_GET';

export const gameMain = (data) => {
	return {
		type: GAME_MAIN_GET,
		data
	};
}

