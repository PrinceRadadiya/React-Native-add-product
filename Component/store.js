import {configureStore} from '@reduxjs/toolkit';
import rootreducer from './redux/rootreducer';
//saga

import createSagaMiddleware from 'redux-saga'

import sagadata from './Saga';
const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
  reducer:rootreducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
  // middleware:()=>sagamiddleware
});

sagaMiddleware.run(sagadata) //file name 
export default store;
