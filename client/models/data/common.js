import { routerRedux } from 'dva/router';
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
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log("路由变化:",history)
    },
  },

  effects: {
    *get({ payload, data, callback }, { call, put, select }) {  // eslint-disable-line
      // console.log(payload)
      yield select(state => {
        console.log('获取项目全局所有模块 state', state)
      })
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
    },

    // eg.
    // dispatch({
    //   type:'common/push',
    //   payload:{
    //     url:'/usrs',
    //     params:{
    //     }
    //   }
    // })
    *push({ payload }, { put }) {

      yield put(routerRedux.push(payload));
    }
    
  },

  reducers: {
    // save(state, action) {
    //   return { ...state, ...action.payload };
    // },
  },

};
