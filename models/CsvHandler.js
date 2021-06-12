const csv = require('csv-parser')
const fs = require('fs')



class CsvHandler{

    constructor( path,validArray, data=[], error = null) {
        this.data = data
        this.path = path
        this.error = error
        this.validArray = validArray
    }

    ///====================== чтение csv файла ========================
    readCsv() {
        return new Promise((resolve, reject)=> {
            fs.createReadStream(this.path)
                .pipe(csv())
                .on('data', (data) => this.data.push(data))
                .on('end', () => {
                    resolve()
                });

        })
            .catch((error)=> this.error = error)
    }

    //*************************************************************

    validateData() {

    }


}

module.exports = CsvHandler