const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

class AddObject {
    static state = {
        fileIndex: 0,
        pvo: [],
        rp: [],
        error: null,
        errorMassage: null,
        statusMassage: null
    }

    static start() {
        if (this.state.error === null) {
            return new Promise(resolve => {
                fs.createReadStream(path.join(__dirname, '../', 'csv', 'pvo.csv'))
                    .pipe(csv())
                    .on('data', (data) => this.state.pvo.push(data))
                    .on('end', () => {
                        resolve()
                    });
            })
                .then(() => {
                    return new Promise(resolve => {
                        fs.createReadStream(path.join(__dirname, '../', 'csv', 'rp.csv'))
                            .pipe(csv())
                            .on('data', (data) => this.state.rp.push(data))
                            .on('end', () => {
                                this.state.statusMassage = "Файл прочитан"
                                this.state.fileIndex = 0
                                resolve()
                            });
                    })

                })
                .then(() => {
                    return {
                        ...this.state, pvo: [], rp: [],
                    }
                })
                .catch(() => {
                    this.error()
                    return this.state
                })

        } else return this.state
    }


    static error() {
        this.clearingDirection()
        this.state.error = true
        this.state.errorMassage = "Ошибка: Загрузите \" имя.csv\" "
    }

    static clearingDirection() {
        fs.readdir(path.join(__dirname, '../', 'csv'), (err, files) => {
            if (err) {
                throw err
            }else if (files.length) {
                files.forEach(file=> {
                    fs.unlink(path.join(__dirname, '../', 'csv', file), (err)=> {
                        if (err) throw err
                    })
                })
            }
        })
    }

    static restartSate() {
        this.state = {
            fileIndex: 0,
            pvo: [],
            rp: [],
            error: null,
            errorMassage: null,
            statusMassage: null
        }
    }


}

module.exports = AddObject