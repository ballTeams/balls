

const initState = {
   
};

const game = (state = initState, action) => {
    switch (action.type) {
        case 'GAME_MAIN_GET' + '_SUCCESS': 
        	return {
        		...state,
        		...action.data
        	};
        default:
            return initState;
    }
};

export default game;