import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import App from '@/pages/App';
import './style/gobal.less';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
