import axios from 'axios';
import key from './myData';

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: key,
});

export const usersAPI = {
  getUsers(page = 1, pageSize = 10) {
    return instance.get(`users?page=${page}&count=${pageSize}`);
  },
  toggleFollow(userId, isFollowed) {
    const url = `follow/${userId}`;
    return isFollowed ? instance.delete(url) : instance.post(url);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status});
  },
  putPhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put(`profile/photo`, formData);
  },
  setProfile(profileInfo) {
    return instance.put(`profile`, profileInfo);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
