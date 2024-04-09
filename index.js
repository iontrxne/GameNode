require('events').EventEmitter.defaultMaxListeners = 0;
const dictionary = require('./AppModules/dictionary');
const launcher = require('./AppModules/launcher')
// Подключите лаунчер, который создали

console.log(dictionary.global.hello);
// Вызовите функцию лаунчера

launcher.run()