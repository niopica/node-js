const path = require("path");

console.log('Склеиваем участки пути на разных OS', path.join('first', 'second', 'third'))
console.log('Выйти на уровень ниже', path.join(__dirname, '..', '..'));
console.log('Абсолютный путь', path.resolve(__dirname, 'first', 'last'))

const fullPath = path.resolve(__dirname, 'first', 'second', 'third.js')
console.log('Парсинг пути', path.parse(fullPath))

console.log('Разделитель в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullPath))
console.log('Расширение файла', path.extname(fullPath))

// -----------------------------------------------------------------------------

const siteURL = `http://localhost:8080/users?id=5123`;
const url = new URL(siteURL)
console.log(url)