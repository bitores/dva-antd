import {
  users,
  person,
  // 以下为通用方法

} from '../../service';


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
    *fetchUser({payload}, {call}) {
       const res = yield call(users, payload);
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
