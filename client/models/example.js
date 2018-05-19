
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
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
