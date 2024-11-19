import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "d725589c-5ac5-4bc1-b5ff-20d7f2a320cc",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const usersAPI = {

    async getUsers(currentPage, pageSize) {
        try {
            const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
};

export const ProfileAPI = {

    async getProfile(userId) {
        try {
            const response = await instance.get(`profile/${userId}`);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    },

    async getStatus(userId) {
        try {
            const response = await instance.get(`profile/status/` + userId);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    },

    async updateStatus(status) {
        try {
            return await instance.put(`profile/status`, { status });
        }
        catch (error) {
            throw error;
        }
    },

    async savePhoto(photoFile) {
        try {
            const formData = new FormData();
            formData.append("image", photoFile);
            const response = await instance.put(`profile/photo`, formData);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    },

    async saveProfile(profile) {
        try {
            return await instance.put(`profile`, profile)
        }
        catch (error) {
            throw error;
        }
    },
};



export const authAPI = {

    async me() {
        try {
            const response = await instance.get(`auth/me`)
            return response.data
        }
        catch (error) {
            throw error;
        }
    },

    async login(email, password, rememberMe = false) {
        try {
            const response = await instance.post(`auth/login`, { email, password, rememberMe })
            return response.data
        }
        catch (error) {
            throw error;
        }

    },

    async logout() {
        try {
            const response = await instance.delete(`auth/login`)
            return response.data
        }
        catch (error) {
            throw error;
        }
    },
};
