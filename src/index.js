import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//redux 불러오기
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

//react-router 불러오기
import { BrowserRouter } from 'react-router-dom';

//internet explorer 호환성을 위해 추가
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
import 'core-js/es6/array';
import 'core-js/es6/function';

//스토어 생성
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(ReduxThunk)
));

ReactDOM.render(
   <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
    document.getElementById('root')
);
