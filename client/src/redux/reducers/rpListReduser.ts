interface initStateType {
    listData: number[][] | null
    filter: ['№ Rp' | null, 'PK' | null, 'H-Пр.' | null, 'H-Факт' | null, 'Возвыш.' | null, 'Домер' | null]
    checked: boolean[]
}

const initState: initStateType = {
    listData: null,
    filter: [null, null, null, null, null, null],
    checked: [true, true, true, false, false, false]
}

export const rpListReducer = (state = initState, action: any): initStateType => {

    switch (action.type) {

        default:
            return state
    }
}