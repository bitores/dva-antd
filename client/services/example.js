import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function person() {
  return request('/api/users/xiaoming');
}
