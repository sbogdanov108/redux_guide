import React from 'react';
import Home from './home';
import { Provider } from 'react-redux';

export default class Application extends React.Component {
  render() {
    return (
      // Провайдер должен быть оберткой для корневого компонента вашего приложения.
      // Таким образом, этот компонент и все его дети
      // (даже на самом глубоком уровне вложенности) будут иметь доступ к вашему Redux-хранилищу.
      // Конечно, чтобы позволить Провайдеру сделать это,
      // вы должны передать ему заранее созданное хранилище через свойство store
      <Provider store={ this.props.store }>
        <Home />
      </Provider>
    )
  }
}