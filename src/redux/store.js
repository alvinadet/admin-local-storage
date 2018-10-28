import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

//state
const barang = {
  dataBarang: [
    {
      nama: 'alvin'
    }
  ]
};

//action
const dataBarang = (state = barang, action) => {
  switch (action.type) {
    case 'ADD_DATA': {
      let tambah = state.dataBarang.push({
        nama: 'Alvin',
        harga: 5000
      });
      return { ...state, tambah };
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        users: action.payload,
        fetching: false,
        fetched: true
      };
    }
    case 'FETCH_USERS_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
  }
  return state;
};

//mengcombine reducer
const reducer = combineReducers({
  dataBarang
});

//memanagement state
const middleware = applyMiddleware(logger, thunk, promise());

let store = createStore(reducer, middleware);
//create store
export default store;

// //pemanggilan action
// store.dispatch({
//   type: 'FETCH_USERS',
//   payload: Axios.get('https://jsonplaceholder.typicode.com/users')
// });

// //component mana saja yag berlangganan
store.subscribe(() => {
  console.log('store change', store.getState(dataBarang));
});
