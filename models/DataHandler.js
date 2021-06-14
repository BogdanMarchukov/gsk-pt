class DataHandler {

    constructor(options) {
        this.dataSortBase = [] // отсортированный массив из БД
        this.dataBase = options.dataBase // обьект из базы данных/ финальный обьект
        this.dataAdd = options.dataAdd // данные для обьединения от пользователя
        this.keySearch = options.keySearch // ключ поиска для сортировки массивов
        this.field = options.field // поле в базе данных (куда нужно добавить данные)
    }

    //================== сортировка данных из БД и данных пользователя====================
    sort() {
        let startIndex = 0
        this.dataSortBase = this.dataBase[this.field].filter(item => {
            if (startIndex < this.dataAdd.length) {
                if (item[this.keySearch] === this.dataAdd[startIndex][this.keySearch]) {
                    startIndex++
                    return true
                } else return false
            } else return false
        })
    }
    // **********************************************************************************
    // ============================= дописание информации ==============================
    mergerData() {
        let startIndex = 0

        const merger = this.dataSortBase.map((item, index) => {
            return {
                ...item, ...this.dataAdd[index]
            }
        })
        this.dataBase[this.field] = this.dataBase[this.field].map(obj => {
            if (startIndex < merger.length) {
                if (obj[this.keySearch] === merger[startIndex][this.keySearch]) {
                    startIndex++
                    return {...obj, ...merger[startIndex - 1]}
                } else return obj
            } else return obj

        })
    }
    //********************************************************************************

}

module.exports = DataHandler