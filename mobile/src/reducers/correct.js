

const initState = {
	list: [],
	result: '',
	total: ''
};

const correct = (state = initState, action) => {
    switch (action.type) {
        case 'CORRECT_MAIN_GET': 
        	return {
        		...state,
        		...action.data,
        	}
        default:
            return initState;
    }
};

export default correct;