import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import FastClick from 'fastclick'; //移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，
import { AppContainer } from 'react-hot-loader'; //局部热更新
import store from '@/store/store';
import Route from '@/router';
import 'lib-flexible';
import '@/style/global.less';


FastClick.attach(document.body);
const render=Component=>{
    ReactDOM.render(
        (
            <Provider store={store}>
                <AppContainer>
                    <Component />
                </AppContainer>
            </Provider>
        ), document.getElementById('root'));
}
    
render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router/', () => {
      render(Route);
    })
  }
    

