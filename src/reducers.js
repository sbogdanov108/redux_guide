var initialTimeState = {};

// Имя редуктора содержит символ “_”, чтобы избежать такой ситуации:
// state.time.time (time повторяется дважды), когда производится чтение данных из состояния.
// Такая запись является всего лишь личным предпочтением и,
// возможно, вам это не понадобится – все зависит от названия вашего редуктора
// и какие свойства он предоставляет Redux-хранилищу.

export function _time( state = initialTimeState, action ) {
  console.log( '_time редуктор вызван с состоянием', state, 'и действием', action );

  switch( action.type ) {
    case 'GET_TIME_REQUEST':
      return {
        ...state,
        frozen: true
      };
    case 'GET_TIME_SUCCESS':
      return {
        ...state,
        time  : action.result.time,
        frozen: false
      };
    case 'GET_TIME_FAILURE':
      // мы могли бы добавить здесь сообщение об ошибке, которое показали бы где-нибудь в нашем приложении
      return {
        ...state,
        frozen: false
      };
    default:
      return state;
  }
}