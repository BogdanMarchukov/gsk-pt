import React from 'react'
import NavBarMenu from "../../Components/NavBarMenu/NavBarMenu";
import {connect} from 'react-redux'
import classes from './FactRp.module.css'



const FactRp = (props) => {
    return (
        <div className={classes.fact}>
            <NavBarMenu
                btnName={["Главная", 'Репера', 'Рихтовка', "Назад"]}
                linkTo={['/', '/rp', '/', '/options']}
            />
            <h1>{props.title}</h1>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        title: state.objectListReducer.currentObject.title
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(FactRp)
