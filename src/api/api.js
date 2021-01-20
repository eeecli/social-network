import axios from 'axios';
import key from './myData';

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: key,
});

const axiosGet = (url) => instance.get(url).then((response) => response.data);
const axiosDelete = (url) => instance.delete(url).then((response) => response.data);
const axiosPost = (url) => instance.post(url).then((response) => response.data);

export const getUsersAPI = (page = 1, pageSize = 10) => axiosGet(`users?page=${page}&count=${pageSize}`);

export const toggleFollowAPI = (userId, isFollowed) => {
  const url = `follow/${userId}`;
  return isFollowed ? axiosDelete(url) : axiosPost(url);
};

export const getProfileAPI = (userId = 2) => axiosGet(`profile/${userId}`);
