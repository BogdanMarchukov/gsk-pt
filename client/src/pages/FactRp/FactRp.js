import React from 'react'
import NavBarMenu from "../../Components/NavBarMenu/NavBarMenu";



const FactRp = () => {
    return (
        <div className={'container'}>
            <NavBarMenu
                btnName={["Главная", "Назад"]}
                linkTo={['/', '/options']}
            />
        </div>
    )
}

export default FactRp
