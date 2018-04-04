import request from 'superagent';
const ajax = (obj, actions) => {
	const {
		url, 
		method = 'GET',
		data,
		success, 
		error,
		type 
	} = obj;
	if (method == 'POST') {
		  request.post(url)
		    .send({ ...data })
		    .then((res) => {
				success && success(JSON.parse(res.text));
		    })
		    .catch((res) => {
		    	error && error(res);
		    });
	} else if (method == 'GET'){
		request.get(url)
			.query({ ...data })
			.then((res) => {
		    	success && success(JSON.parse(res.text));
		    })
			.catch((res) => {
		    	error && error(res);
		    });
	}
	
}
export default ajax;