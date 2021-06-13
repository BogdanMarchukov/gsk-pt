class DataHandler {

    constructor(keySearch = '', field = '', dataBase = [], dataAdd = []) {
        this.dataSortBase = [] // отсортированный массив из БД
        this.dataBase = dataBase
        this.dataAdd = dataAdd
        this.keySearch = keySearch // ключ поиска для сортировки массивов
        this.field = field // поле в базе данных (куда нужно добавить данные)
    }

    // сортировка данных из БД и данных пользователя

    sort() {
        let startIndex = 0
        this.dataBase[this.field].forEach(item => {
            if (item[this.keySearch] === this.dataAdd[startIndex][this.keySearch]) {
                this.dataSortBase.push(item)
                startIndex++
            }
        })
    }

    mergerData() {
        console.log('test')
        const finish = this.dataSortBase.map((item, index)=> {

        })
    }


}

module.exports = DataHandler