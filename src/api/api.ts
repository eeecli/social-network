import axios from 'axios';
import { ProfileType } from '../types/types';
import key from './myData';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: key,
});

export const usersAPI = {
  getUsers(page = 1, pageSize = 10) {
    return instance.get(`users?page=${page}&count=${pageSize}`);
  },
  toggleFollow(userId: number, isFollowed: boolean) {
    const url = `follow/${userId}`;
    return isFollowed ? instance.delete(url) : instance.post(url);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put('profile/status/', { status });
  },
  putPhoto(photo: any) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put('profile/photo', formData);
  },
  setProfile(profileInfo: ProfileType) {
    return instance.put('profile', profileInfo);
  },
};

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

type MeResponceType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
}

type LoginResponceType = {
  data: {
    userId: number
  }
  resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
  messages: Array<string>
}

export const authAPI = {
  me() {
    return instance.get<MeResponceType>('auth/me').then(res => res.data);
  },
  login(email: string, password: string, rememberMe: boolean, captcha: string) {
    return instance.post<LoginResponceType>('auth/login', {
      email,
      password,
      rememberMe,
      captcha,
    }).then(res => res.data);
  },
  logout() {
    return instance.delete('auth/login');
  },
};

export const securityAPI = {
  getCaptcha() {
    return instance.delete('security/get-captcha-url');
  },
};
