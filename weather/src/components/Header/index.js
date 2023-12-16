import { IoMdSunny } from "react-icons/io";

import './index.css'

const Header=(props)=>{
    const {headerDetails} = props
    console.log(headerDetails)

    return(
        <nav className="p-6 header-container">
            <IoMdSunny className="text-orange-700 sun-icon"/>
        </nav>
    )
}

export default Header