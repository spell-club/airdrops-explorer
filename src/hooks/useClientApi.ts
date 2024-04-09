import ClientApi from '../api';

const useClientApi = () => {
	const clientApi = new ClientApi();

	return {
		clientApi,
	};
};

export default useClientApi;
