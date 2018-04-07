

const initState = {
   list: []
};

const notice = (state = initState, action) => {
    switch (action.type) {
        case 'NOTICE_MAIN_GET': 
        	return {
        		...state,
        		list: [
        			...action.data
        		]
        		
        	}
        default:
            return initState;
    }
};

export default notice;