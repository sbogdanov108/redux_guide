// Для этого примера мы будем использовать Bluebird (https://github.com/petkaantonov/bluebird) в качестве promise-библиотеки,
// но вы можете заменить её на любую другую удобную для вас.
import Promise from 'bluebird';

export function getTime( delay ) {
  return {
    types  : [ 'GET_TIME_REQUEST', 'GET_TIME_SUCCESS', 'GET_TIME_FAILURE' ],
    promise: () => {
      return new Promise( ( resolve, reject ) => {
        // Просто имитируем асинхронный запрос к серверу с помощью setTimeout
        setTimeout( () => {
          const d  = new Date();
          const ms = ( '000' + d.getMilliseconds() ).slice( -3 );

          resolve( {
            time: `${d.toString().match( /\d{2}:\d{2}:\d{2}/ )[ 0 ]}.${ms}`
          } );
        }, delay );
      } );
    }
  }
}