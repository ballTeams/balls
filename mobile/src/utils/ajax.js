import request from 'superagent';
const ajax = (obj = {
	url: '/', 
	method: 'GET',
	data: {},
	success: (res) => {
		
	}, 
	error: (res) => {
		console.log(res);
	} 
}) => {
	if(method == 'POST') {
		  request.post(obj.url)
		    .send({ ...obj.data })
		    .then((res) => {
		    	console.log(res);
				return dispatch({
					'API': {
						apiName: apiName,
						params: params,
						opts: opts
					},
					type: types.API_REQUEST
				});
		    })
		    .catch(error);
	} else if (method == 'GET'){
		request.get(api.url)
			.query({ ...obj.data })
			.then(success)
			.catch(error);
	}
	
}
export ajax;