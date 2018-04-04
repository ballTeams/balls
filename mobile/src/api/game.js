import APIROOT from './root';

const api = {
	GAME_MAIN_GET: '/foot-ball/index',
	GAME_RESULT_GET: '/match-result/index',
	GAME_DETAIL_GET: '/foot-ball/match-info',
	GAME_DETAIL_SAVE_POST: '/foot-ball/buy'
};

export default APIROOT(api);

