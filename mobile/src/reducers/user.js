

const initState = {
   
};

const user = (state = initState, action) => {
    switch (action.type) {
        case 'USER_MAIN_GET': 
        	return {
        		...state,
        		...action.data
        	}
        default:
            return initState;
    }
};

export default user;