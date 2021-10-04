import React, {useRef} from 'react'
import classes from './AddFact.module.css'

type Props = {
    show: boolean
    id: number
    addFactDataHandler: (inputH: React.MutableRefObject<null>, inputD: React.MutableRefObject<null>, file: React.MutableRefObject<HTMLInputElement | null>, id: number) => void
}
const AddFactData = (props: Props) => {
    const checkInputH = useRef(null)
    const checkInputD = useRef(null)
    const file = useRef(null)

    if (props.show) {

        return (
            <div className={`${classes.addWrap} card blue-grey darken-1`}>
                <div className="card-content white-text">
                    <p>Добавить фактические данные</p>
                    <div className={'row'}>
                        <div className={'col l3'}>
                            <p>
                                <label>
                                    <input ref={checkInputH} type="checkbox"/>
                                    <span>H Факт</span>
                                </label>
                            </p>
                        </div>
                        <div className={'col l2'}>
                            <p>
                                <label>
                                    <input ref={checkInputD} type="checkbox"/>
                                    <span>Домер</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={`col s7`}>
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>File</span>
                                    <input ref={file}  type="file"/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className={`col s5 ${classes.margin}`}>
                            <button
                                className="btn waves-effect waves-light"
                                type="submit"
                                name="action"

                                onClick={()=> props.addFactDataHandler(checkInputH, checkInputD, file, props.id)}
                            >
                                Отправить
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else return null
}
export default AddFactData