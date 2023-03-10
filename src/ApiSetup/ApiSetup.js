import axios from "axios";

export const instants = axios.create({ baseURL: 'https://connections-api.herokuapp.com' })
export const setToken = (value) => {instants.defaults.headers.common['Authorization'] = value}
export const deleteToken = () => {delete instants.defaults.headers.common['Authorization']}