

const initState = {
  	list: [],
};

const agent = (state = initState, action) => {
    switch (action.type) {
        case 'AGENT_MAIN_GET': 
        	return {
        		...state,
        		list: [
        			...action.data,
        		]
        	}
        default:
            return initState;
    }
};

export default agent;