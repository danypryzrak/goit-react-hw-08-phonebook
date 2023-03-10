import { deleteToken, instants, setToken } from "ApiSetup/ApiSetup";

export const getSignUp = async data => {
    const { data: result } = await instants.post('/users/signup', data);
    setToken(result.token);
    return result;
};

export const getLogIn = async data => {
    const { data: result } = await instants.post('/users/login', data);
    setToken(result.token);
    return result;
};

export const getLogOut = async () => {
    const { data } = await instants.post('/users/logout');
    deleteToken();
    return data;
};

export const getCurrent = async token => {
    try {
    setToken(token);
    const { data } = await instants.get('/users/current');
    return data;
    } catch (error) {
    setToken();
    throw error;
    }
};
