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

//스토어 생성
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(ReduxThunk)
));;

ReactDOM.render(
   <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
    document.getElementById('root')
);
