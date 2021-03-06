import React from 'react'
import ToHome from "../../Components/ToHome/ToHome";
import TableData from "../../Components/TablData/TableData";
import classes from './RpListPage.module.css'
import FilterData from "../../Components/FilterData/FilterData";
import {connect} from "react-redux";
import {currentObjectType, rpType} from "../../redux/reducers/objectListReducer";
import {addFactDataHandler, buttonHandler, filter, searchInputHandler} from "../../redux/actions/rpListActionCreater";
import {listData} from "../../redux/actions/rpListActionCreater";
import {rpListInputHandler} from "../../redux/actions/rpListActionCreater";
import SearchRp from "../../Components/SearchRp/SearchRp";
import Errors from "../../Components/Errors/Errors";
import NavBarMenu from "../../Components/NavBarMenu/NavBarMenu";
import AddFactData from "../../Components/AddFactData/AddFactData";

type Props = {
    checked: boolean[]
    title: string
    filter: filter
    listData: number[][]
    rpListInputHandler: (
        indexHandler: number,
        filter: filter,
        checked: boolean[],
        rp: Array<rpType>,
        listData: listData
    ) => void
    rp: Array<rpType>
    searchInputHandler: (eventTarget: string, list: currentObjectType) => void
    buttonHandler: (listData: number[][], numberRp: number, rpList: rpType[]) => void
    searchInput: number
    listDataCache: number[][]
    errorMassage: string | null
    error: boolean
    currentObject: currentObjectType
    addFactDataHandler: (inputH: React.MutableRefObject<null>, inputD: React.MutableRefObject<null>, file: React.MutableRefObject<HTMLInputElement | null>, id: number) => void
    id: number
}
const RpListPage = (props: Props) => {

    return (
        <>
            <NavBarMenu
                btnName={["Главная", 'Репера', 'Рихтовка', 'Съемка', 'Назад']}
                linkTo={['/', '/rp', '/edit-rp', '/fact', '/options']}
            />
            <div className={classes.wrapper}>

                <Errors
                    errorMassage={props.errorMassage}
                    error={props.error}
                />
                <AddFactData
                    addFactDataHandler={props.addFactDataHandler}
                    show={true}
                    id={props.id}
                />
                <FilterData
                    inputList={[

                        {
                            checkDefault: props.checked[0], inputHandler: () => {
                                props.rpListInputHandler(0, props.filter, props.checked, props.rp, props.listData)
                            }, inputName: 'PK'
                        },
                        {
                            checkDefault: props.checked[1], inputHandler: () => {
                                props.rpListInputHandler(1, props.filter, props.checked, props.rp, props.listData)
                            }, inputName: 'H-Пр.'
                        },
                        {
                            checkDefault: props.checked[2], inputHandler: () => {
                                props.rpListInputHandler(2, props.filter, props.checked, props.rp, props.listData)
                            }, inputName: 'H-Факт'
                        },
                        {
                            checkDefault: props.checked[3], inputHandler: () => {
                                props.rpListInputHandler(3, props.filter, props.checked, props.rp, props.listData)
                            }, inputName: 'Возвыш.'
                        },
                        {
                            checkDefault: props.checked[4], inputHandler: () => {
                                props.rpListInputHandler(4, props.filter, props.checked, props.rp, props.listData)
                            }, inputName: 'Домер'
                        }

                    ]}
                />
                <SearchRp
                    searchInputHandler={props.searchInputHandler}
                    buttonHandler={() => props.buttonHandler(props.listData, props.searchInput, props.rp)}
                    list={props.currentObject}
                />
                <TableData
                    tableName={props.title}
                    columnName={props.filter}
                    data={props.listData}
                />


                <ToHome/>
            </div>
        </>
    )
}

function mapStateToProps(state: any) {
    return {
        checked: state.rpListReducer.checked,
        title: state.objectListReducer.currentObject.title,
        filter: state.rpListReducer.filter,
        listData: state.rpListReducer.listData,
        rp: state.rpListReducer.rpList,
        searchInput: state.rpListReducer.searchInput,
        listDataCache: state.rpListReducer.listDataCache,
        errorMassage: state.rpListReducer.errorMassage,
        error: state.rpListReducer.error,
        currentObject: state.objectListReducer.currentObject,
        id: state.objectListReducer.currentObject._id
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        rpListInputHandler: (
            indexHandler: number,
            filter: filter,
            checked: boolean[],
            rp: Array<rpType>,
            listData: listData
        ) => dispatch(() => rpListInputHandler(dispatch, indexHandler, filter, checked, rp, listData)),
        searchInputHandler: (eventTarget: string, list: currentObjectType) => dispatch(() => searchInputHandler(dispatch, eventTarget, list)),
        buttonHandler: (listData: number[][], numberRp: number, rpList: rpType[]) => dispatch(() => buttonHandler(dispatch, listData, numberRp, rpList)),
        addFactDataHandler: (inputH: React.MutableRefObject<null>, inputD: React.MutableRefObject<null>, file: React.MutableRefObject<HTMLInputElement | null>, id: number) => dispatch(()=> addFactDataHandler(dispatch, inputH, inputD, file, id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RpListPage)