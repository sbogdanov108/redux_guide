// Импортируем модуль 'http' для создания HTTP-сервера
import http from 'http';
import webpackDevServer from './webpack-dev-server';
import React from 'react';

//  Добавим номер порта, на котором будет висеть наше приложение и запуск Webpack Dev Server:
const port = 5050;
webpackDevServer.listen( port );

var server = http.createServer( function( req, res ) {

  // Это нужно всего лишь для того, чтобы избежать сервер ничего не делал при
  // автоматическом запросе браузером favicon.
  // Иначе, сервер бы вернул пустую HTML-страницу
  if( req.url.match( 'favicon.ico' ) ) {
    return res.end();
  }

  // И конечно же, вот HTML нашего приложения, который мы отправляем обратно браузеру
  // Ничего особого, кроме URI, который указывает на общий JS-файл для нашего приложения
  // И который расположен на http://localhost:5051
  res.write(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div id="app-wrapper"></div>
        <script type="text/javascript" src="http://localhost:5051/static/bundle.js"></script>
      </body>
    </html>`
  );

  res.end();
} );

// Запустим наш главный сервер и выведем в консоль информацию об этом запуске:
server.listen( port );
console.log( `Сервер запущен на http://127.0.0.1:${port}` );
