import React from 'react';
import { connect } from 'react-redux';

// Мы используем ES6 трюк для импорта, чтобы получить все action creators и их имена,
// точно так, как мы сделали это с нашими редукторами.
import * as actionCreators from './action-creators';

class Home extends React.Component {
  onTimeButtonClick( delay ) {
    // Метод onTimeButtonClick будет отправлять действие в качестве ответа на событие клика от пользователя.
    // В данном случае мы используем функцию отправки, которая автоматически предоставляется connect в свойствах.
    // Существует альтернативный способ вызова actionCreators, который уже будет связан с отправкой,
    // и этот способ реализован во втором параметре connect: https://github.com/reactjs/react-redux/blob/v4.4.5/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
    // Значение параметра delay передается в actionCreators.getTime и является задержкой для имитирования асинхронной работы,
    // которая была сделана до того, как мы получили текущее время.
    // Попробуйте изменить это значение, чтобы проверить правильность воздействия задержки на наш интерфейс.

    this.props.dispatch( actionCreators.getTime( delay ) );
  }

  render() {

    // Благодаря connect, мы можем получить конкретные данные через свойства
    var { frozen, time, reduxState } = this.props;
    var attrs                        = {};
    const DELAY                      = 500; // в ms

    if( frozen ) {
      attrs = {
        disabled: true
      }
    }

    return (
      <div>
        <h1>Пример Провайдера и функции connect</h1>

        <span>
          <b>Который час?</b> { time ? `Сейчас ${time}` : 'Без понятия...' }
        </span>
        <br /><br />

        <i>
          При клике по кнопке, время будет отображено после задержки в {DELAY}ms.<br />
          Попробуйте изменить это значение (в <b>src/home.jsx</b> - строка 26), чтобы проверить правильность воздействия задержки на интерфейс
        </i>
        <br /><br />

        {/* Здесь мы регистрируем обработчик кнопки onClick: */}
        <button { ...attrs } onClick={() => this.onTimeButtonClick( DELAY )}>Получить время!</button>

        <pre>
          redux state = { JSON.stringify( reduxState, null, 2 ) }
        </pre>
      </div>
    )
  }
}

// Добавим в конец файла после класса компонента определение функции выбора,
// которая будет извлекать из состояния те части данных, и которые мы хотели бы предоставить через свойства нашему компоненту
const mapStateToProps = ( state/*, props*/ ) => {
  return {
    frozen    : state._time.frozen,
    time      : state._time.time,
    // Не слишком хорошей практикой будет предоставлять полные свойства, как это было сделано: reduxState: state.
    // И это уместно для нашего примера, чтобы мы смогли посмотреть строковую версию этих свой на странице.
    // Более подробно об этом можно найти по ссылке:
    // https://github.com/reactjs/react-redux/blob/v4.4.5/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
    reduxState: state
  }
};

const ConnectedHome = connect( mapStateToProps )( Home );

export default ConnectedHome;