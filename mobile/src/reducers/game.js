

const initState = {
   list: [],
   result: {
        1: [],
        2: [],
        3: []
   }
};

const game = (state = initState, action) => {
    switch (action.type) {
        case 'GAME_MAIN_GET': 
        	return {
        		...state,
        		list: [
        			...action.data
        		]
        		
        	};
        case 'GAME_RESULT_GET': 

            return {
                ...state,
                [action.status]: [
                    ...action.data
                ]
            };
        default:
            return initState;
    }
};

export default game;