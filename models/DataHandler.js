class DataHandler {

    constructor(options) {
        this.dataSortBase = [] // отсортированный массив из БД
        this.dataBase = options.dataBase
        this.dataAdd = options.dataAdd
        this.keySearch = options.keySearch // ключ поиска для сортировки массивов
        this.field = options.field // поле в базе данных (куда нужно добавить данные)
    }

    // сортировка данных из БД и данных пользователя
    sort() {
        let startIndex = 0
        this.dataSortBase = this.dataBase[this.field].filter(item=> {
            if (startIndex < this.dataAdd.length) {
                if (item[this.keySearch] === this.dataAdd[startIndex][this.keySearch]){
                    startIndex++
                    return true
                }
                else return false
            }
            else return false
        })
    }

    mergerData() {
        console.log(this.dataSortBase)
        const finish = this.dataSortBase.map((item, index) => {


        })
    }


}

module.exports = DataHandler