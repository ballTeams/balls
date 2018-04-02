

const initState = {
   list: []
};

const game = (state = initState, action) => {
    switch (action.type) {
        case 'GAME_MAIN_GET': 
        	console.log(action, 123);
        	return {
        		...state,
        		list: [
        			...action.data
        		]
        		
        	};
        default:
            return initState;
    }
};

export default game;