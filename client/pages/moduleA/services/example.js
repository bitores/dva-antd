import request from '../utils/request';

const apiPrefix="/api";

export function query() {
  return request(`${apiPrefix}/users`);
}

export function person() {
  return request(`${apiPrefix}/users/xiaoming`);
}
