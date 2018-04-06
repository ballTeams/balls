

export const AGENT_MAIN_GET = 'AGENT_MAIN_GET';


export let agentMain = (data) => {
	return {
		type: AGENT_MAIN_GET,
		data
	}
}