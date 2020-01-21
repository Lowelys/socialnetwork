import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '279228c3-424a-4fec-9955-c1d11ad9779f'
    }
});

export  const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
};


export const  getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
};