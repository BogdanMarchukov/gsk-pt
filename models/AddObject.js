const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

class AddObject {
    constructor() {
        this.pvo = []
        this.rp = []
        this.status = {
            errorMassage: null,
        }
    }

    start() {
        return new Promise((resolve, reject) => {

            else {
                reject()

            }
        })
            .then(() => {
                return new Promise(resolve => {
                    fs.createReadStream(path.join(__dirname, '../', 'csv', 'pvo.csv'))
                        .pipe(csv())
                        .on('data', (data) => this.pvo.push(data))
                        .on('end', () => {
                            resolve()
                        });
                })
            })
            .then(() => {
                return new Promise(resolve => {
                    fs.createReadStream(path.join(__dirname, '../', 'csv', 'rp.csv'))
                        .pipe(csv())
                        .on('data', (data) => this.rp.push(data))
                        .on('end', () => {
                            this.status = {...this.status, ridFile: 'finish'}
                            resolve()
                        });
                })

            })
            .then(() => {
                return this.status
            })
            .catch(()=> {
                this.status = {
                    errorMassage: '!!!!!!!!!!!!!!!!!',
                }
                return this.status
            })

    }


}

module.exports = AddObject