import { queryHello } from '@/services/api';

export default {
  namespace: 'yeyetest',

  state: {
    response: "",
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryHello);
      yield put({
        type: 'getHello',
        payload: response,
      });
    },
  },

  reducers: {
    getHello(state, action) {
      console.log(action)
      return {
        ...state,
        response: action.payload,
      };
    },
  },
};
