import React from 'react'
import {connect} from "react-redux";
import classes from './RpInfo.module.css'


const RpInfo = (props) => {

    return (
        <div className={`container ${classes.RpInfo}`}>
            <h1>{props.title}</h1>
            <div className={'card'}>
                <div className={'row'}>
                    <div className={`col s6 ${classes.border} ${classes.active}`}>
                        11
                    </div>
                    <div className={`col s6 ${classes.border}`}>
                        11
                    </div>
                    <div className={`col s12 light-blue lighten-4 ${classes.card}`}>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut cumque eaque earum eligendi
                            fugit hic ipsam, libero nam odit placeat, quam quasi rem repellat reprehenderit repudiandae
                            sint, temporibus voluptatem.</h5>
                    </div>
                </div>
            </div>

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


export default connect(mapStateToProps, mapDispatchToProps)(RpInfo)