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
                    this.validateDataFile(this.state.pvo, this.state.rp)
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
            } else if (files.length) {
                files.forEach(file => {
                    fs.unlink(path.join(__dirname, '../', 'csv', file), (err) => {
                        if (err) throw err
                    })
                })
            }
        })
    }

    static validateDataFile(pvo, rp) {
        const validPvo = ['number', 'x', 'y', 'h', 'keyX', 'keyY', 'keyH']
        const validRp = ['number', 'pk', 'distance', 'ugr', 'elevation']
        this.validateForEach(pvo, validPvo)
        this.validateForEach(rp, validRp)
        if (this.state.errorMassage) {
            this.clearingDirection()
        }
    }

    static validateForEach(data, validArr) {
        data.forEach((item) => {
            let k = 0
            for (const key in item) {
                if (key !== validArr[k]) {
                    this.state.error = true
                    this.state.errorMassage = "Файл не валидный"
                } else {
                    if (k < validArr.length) {
                        k++
                    } else k = 0
                }
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