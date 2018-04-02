
const APIROOT = (api) => {
	const Root = 'http://wap.balls.com';
	let newAPI = {};
	for (let a in api) {
		newAPI[a] = Root + api[a];
	}
	return newAPI;
};
export default APIROOT;