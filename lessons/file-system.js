const fs = require('fs');
const path = require('path');

console.log('START');

// Асинхронный вариант, используется callback для обработки
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//
//     console.log('Папка создана')
// })

// Синхронный вариант - для создания папки в папках используем { recursive }
// fs.mkdirSync(path.resolve(__dirname, 'dir666', 'dir777'), { recursive: true });

// --------------------------------------------------------------

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// --------------------------------------------------------------
// Создание Файла с содержимым, если изменить содержимое он их перезатрет
// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'текст в документе', (err) => {
//     if(err) {
//         throw err
//     }
//     console.log('Файл создан, и записан')
//
//     // Создание Файла с содержимым, если изменить содержимое он их перезатрет
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), 'добавили текст в конец', (err) => {
//         if (err) {
//             throw err
//         }
//         console.log('добавили текст в конец документа')
//     })
// })

const writeFileAsync = (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf8'},(err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'),'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '564'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '932'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then((data) => console.log(data))
//     .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('file was removed') )

// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить файл

// const text = process.env.TEXT || ''
//
// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))

// console.log('END')