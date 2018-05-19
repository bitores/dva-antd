import {query,person} from '../services/example';


export default {

  namespace: 'example',

  state: {
    data:[
      {
        id: 1,
        value: 56464
      },
      {
        id: 5,
        value: 56464
      },
    ]
  },

  subscriptions: {
    // setup({ dispatch, history }) {  // eslint-disable-line
    // },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    *fetchUser({payload}, {call}) {
       const res = yield call(query, payload);
       console.log(res);
    },

    *fetchXiaoming({payload}, {call}) {
       const res = yield call(person, payload);
       console.log(res);
    }

    
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
