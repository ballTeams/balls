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
		console.log(data);
		  request.post(url)
		    .send({ ...data })
		    .then((res) => {
				success && success(JSON.parse(res.text));
		    })
		    .catch((res) => {
		    	error && error(res.text);
		    });
	} else if (method == 'GET'){
		request.get(url)
			.query({ ...data })
			.then((res) => {
		    	success && success(JSON.parse(res.text));
		    })
			.catch((res) => {
		    	error && error(res.text);
		    });
	}
	
}
export default ajax;