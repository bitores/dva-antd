//  通用模块

import {
  // 以下为通用方法
  getData,
  postData,
} from '../../service';


export default {

  namespace: 'common',

  state: {
    data:{}
  },

  subscriptions: {
    // setup({ dispatch, history }) {  // eslint-disable-line
    // },
  },

  effects: {
    *get({ payload, data, callback }, { call, put }) {  // eslint-disable-line
      console.log(payload)
      const res = yield call(getData, payload);
      if(res.code === 0) {
        yield put({
          type:'save',
          payload:{
            [data||"commonData"]: res.data,
          },
        })
        callback&&callback(res.data)
      }
    },

    *post({ payload, data, callback }, { call, put }) {
       const res = yield call(postData, payload);
       if(res.code === 0) {
        yield put({
          type:'save',
          payload:{
            [data||"commonData"]: res.data,
          },
        })
        callback&&callback(res.data)
      }
    },

    *clean({payload},{put}) {
      yield put({
        type:'save',
        payload,
      })
    }
    
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
