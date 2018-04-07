

const initState = {
   type: {},
   main: {
        1: [],
        2: [],
        3: [],
        total_money: ''
   }
};	

const finance = (state = initState, action) => {
    switch (action.type) {
        case 'FINANCE_TYPE_GET':
        	return {
        		...state,
        		type: {
        			...action.data
                }
        	}
        case 'FINANCE_MAIN_GET':
            return {
                ...state,
                main: {
                    total_money: action.data.total_money,
                    [action.status]: [
                        ...action.data.list
                    ]
                }
            }
        default:
            return initState;
    }
};

export default finance;