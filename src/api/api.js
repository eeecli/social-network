import axios from 'axios';
import key from './myData';

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: key,
});

export const usersAPI = {
  getUsers(page = 1, pageSize = 10) {
    return instance.get(`users?page=${page}&count=${pageSize}`).then((response) => response.data);
  },
  toggleFollow(userId, isFollowed) {
    const url = `follow/${userId}`;
    return isFollowed
      ? instance.delete(url).then((response) => response.data)
      : instance.post(url).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status}).then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe}).then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
