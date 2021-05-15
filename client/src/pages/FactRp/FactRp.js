import React from 'react'
import NavBarMenu from "../../Components/NavBarMenu/NavBarMenu";



const FactRp = () => {
    return (
        <>
            <NavBarMenu
                btnName={["Главная", 'Репера', 'Рихтовка', "Назад"]}
                linkTo={['/', '/rp', '/', '/options']}
            />
        </>
    )
}

export default FactRp
