import React from 'react';
import { render } from 'react-dom';
// Весь код, относящийся к созданию хранилища будет располагаться в файле src/create-store.js
import createStore from './create-store';
// А корневой компонент нашего приложения и компонент Redux Провайдера в файле src/application.jsx
import Application from './application';

// Также, как мы уже делали много раз в предыдущих главах, мы создадим экземпляр Redux.
// Только на этот раз, весь код для задачи мы перенесем в определенный модуль,
// который вернет одиночную функцию для инициализации экземпляра
const store = createStore();

// Теперь самое время сделать рендер нашего приложения в DOM, используя ReactDOM.render или просто render,
// благодаря ES6 нотации import { render } from 'react-dom'):
render(
  // И предоставить наше Redux-хранилище корневому компоненту в качестве свойства,
  // после чего Redux Провайдер сможет сделать свою работу
  <Application store={store}/>,
  document.getElementById( 'app-wrapper' )
);
