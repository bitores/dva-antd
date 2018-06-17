import request from '../utils/request';
import qs from 'qs';

const apiPrefix="/api";

//  风格一 rest api
export async function query({url, params}) {
  return request(`${apiPrefix}${url}?${qs.stringify(params)}`);
}

export async function create({url, params}) {
  return request(`${apiPrefix}${url}`, {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function remove({url, params}) {
  return request(`${apiPrefix}${url}`, {
    method: 'delete',
    body: qs.stringify(params),
  });
}

export async function update({url, params}) {
  return request(`${apiPrefix}${url}`, {
    method: 'put',
    body: qs.stringify(params),
  });
}




//  风格二 get post 一般请求格式
export async function getData({url, params}) {
	return request(`${apiPrefix}${url}?${qs.stringify(params)}`)
}

export async function postData({url, params}) {
	return request(`${apiPrefix}${url}`,{
		method:'POST',
		body:params,
	});
}

export async function deleteData({url, params}) {
	return request(`${apiPrefix}${url}`,{
		method:"DELETE",
		body: params,
	});
}


// 风格三 普通 service
export async function users() {
  return request(`${apiPrefix}/users`);
}

export async function person() {
  return request(`${apiPrefix}/users/xiaoming`);
}