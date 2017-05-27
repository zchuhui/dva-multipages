import * as usersService from '../services/users';

export default {
  namespace: 'users',
  
  //初始化状态
  state: {
  	list: [],
    total: null,
  },
  reducers: {
  	save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
  	// 获取数据
  	*fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
    },
    // 删除数据
    *remote({ payload: id},{ call, put, select}) {
    	yield call(usersService.remove,id);
    	const page = yield select(state => state.users.page);
    	yield put({ type: 'fetch',payload: { page }});
    },
    // 修改数据
    *patch({ payload: { id, values }},{ call, put, select }) {
    	yield call(usersService.patch,id,values);
    	const page = yield select(state => state.users.page);
    	yield put({ type: 'fetch',payload: { page }});
    }
  },
  subscriptions: {
  	setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
  	},
  },
};
