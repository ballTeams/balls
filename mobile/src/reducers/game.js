

const initState = {
   list: [],
   result: {
        1: [],
        2: [],
        3: []
   },
   detail: {

   }
};

const game = (state = initState, action) => {
    switch (action.type) {
        case 'GAME_MAIN_GET': 
        	return {
        		...state,
        		list: [
                    ...state.list,
        			...action.data
        		]
        		
        	};
        case 'GAME_RESULT_GET': 

            return {
                ...state,
                result: {
                    ...state.result,
                    [action.status]: [
                        ...action.data
                    ]
                }
                
            };
        case 'GAME_DETAIL_GET': 
            return {
                ...state,
                detail: {
                    ...state.detail,
                    ...action.data
                }
            }
        default:
            return initState;
    }
};

export default game;