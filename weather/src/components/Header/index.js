import { IoMdSunny } from "react-icons/io";

import './index.css'

const Header=(props)=>{
    const {headerDetails} = props
    console.log(headerDetails)

    return(
        <nav className="p-6 header-container flex">
            <IoMdSunny className="text-orange-700 sun-icon"/>
            <h1 className="text-white font-bold ml-3 text-md self-center">Weather</h1>
        </nav>
    )
}

export default Header