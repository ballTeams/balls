

const initState = {
   	list: [],
   	total: ''
};

const commission = (state = initState, action) => {
    switch (action.type) {
        case 'COMMISSION_MAIN_GET':
	        return {
	        	...state,
	        	...action.data
	        }
        default:
            return initState;
    }
};

export default commission;