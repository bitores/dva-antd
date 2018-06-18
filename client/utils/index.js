export function getAuthHeader(sso_token) {
  return ({
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + sso_token,
      'Content-Type': 'application/json',
    },
  });
}

// Operation Cookie
export function getCookie(name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) {
    return decodeURIComponent(arr[2]);
  } else {
    return null;
  }
}

export function delCookie({ name, domain, path }) {
  if (getCookie(name)) {
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=' + 
                      path + '; domain=' + 
                      domain;
  }
}

// Operation LocalStorage
export function setLocalStorage(key, vaule) {
  return localStorage.setItem(key, JSON.stringify(vaule));
}

export function getLocalStorage(key) {
  const value = JSON.parse(localStorage.getItem(key));
  return value;
}

// 深层获取 对象的 键值
// eg.
// var obj = {
//     a: {
//         a3: {
//             a31: 1,
//         }
//     }
// };
// var arr = ['a', 'a3', 'a31'];
// getValue(arr, obj)
export function getValue(arr=['o'], obj={}) {
  if(Object.prototype.toString.call(arr)!=='[object Array]') {
    throw new Error('First params must be array')
  }
  return arr.reduce((o, k)=>o && k in o? o[k]:null,obj)
}