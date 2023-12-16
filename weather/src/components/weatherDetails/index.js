import { IoIosPartlySunny } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import './index.css'

const WeatherDetails=(props)=>{
    const {someData} = props 
    const seconds = someData.dt
    const milliseconds = seconds * 1000
    const date = new Date(milliseconds)
    const hours = date.getHours()
    const minutes=date.getMinutes()
    const forAmPm = hours>=12?"PM":"AM"
    const indianFormat = hours%12||12

    const sunRiseSeconds=someData.sys.sunrise
    const suRisemilliseconds=sunRiseSeconds*1000
    const sunriseTime=new Date(suRisemilliseconds)
    const sunRiseHours = sunriseTime.getHours()
    const sunRiseMinutes=sunriseTime.getMinutes()
    const sunRiseAmPm=sunRiseHours>=12?'PM':"AM"
    const sunRiseFormat=sunRiseHours%12||12
    const sunRiseOutput=`${sunRiseFormat.toString().padStart(2,"0")}:${sunRiseMinutes.toString().padStart(2,"0")} ${sunRiseAmPm}`

    const sunSetSeconds=someData.sys.sunset
    const suSetmilliseconds=sunSetSeconds*1000
    const sunSetTime=new Date(suSetmilliseconds)
    const sunSetHours = sunSetTime.getHours()
    const sunSetMinutes=sunSetTime.getMinutes()
    const sunSetAmPm=sunSetHours>=12?'PM':"AM"
    const sunSetFormat=sunSetHours%12||12
    const sunSetOutput=`${sunSetFormat.toString().padStart(2,"0")}:${sunSetMinutes.toString().padStart(2,"0")} ${sunSetAmPm}`


    const getOutput=`${indianFormat.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")} ${forAmPm}`
    const tempRounded = Math.round(someData.main.temp,2)
    const feelsLike = Math.round(someData.main.feels_like)

    return(
        <div>
        <div className='card-container'>
            <div className="flex justify-around">
                <h1 className="text-xl text-center font-bold">Current Weather</h1>
            </div>
            <p className="text-start font-bold text-md">{getOutput}</p>
            <div className='flex justify-between'>
                <h1 className="location-name font-bold text-sm lg:text-xl">{someData.name},<span className="text-sm">{someData.sys.country}</span></h1>
                <p className="self-center font-bold text-sm lg:text-xl">{tempRounded} deg C</p>
                <div className="flex flex-col justify-center">
                <IoIosPartlySunny className='sunny-image text-xl'/>
                <p className="font-bold self-center">{someData.weather[0].description}</p>
                </div>
           </div>
           <hr className="border-1 mt-4 mb-4"/>
           <ul className="list-none">
            <li className="flex justify-between">
                <p className="font-bold text-sm lg:text-xl">Wind Speed</p>
                <p className="font-bold text-sm lg:text-xl">{someData.wind.speed} Kmph</p>
            </li>
            <hr className="border-1 mt-4 mb-4"/>
            <li className="flex justify-between">
                <p className="font-bold text-sm lg:text-xl">Pressure</p>
                <p className="font-bold text-sm lg:text-xl">{someData.main.pressure} P</p>
            </li>
            <hr className="border-1 mt-4 mb-4"/>
            <li className="flex justify-between">
                <p className="font-bold text-sm lg:text-xl">Feels Like</p>
                <p className="font-bold text-sm lg:text-xl">{feelsLike} deg C</p>
            </li>
            <hr className="border-1 mt-4 mb-4"/>
            <li className="flex justify-between">
                <p className="font-bold text-sm lg:text-xl">Maximum Temperature</p>
                <p className="font-bold text-sm lg:text-xl">{Math.round(someData.main.temp_max,2)} deg C</p>
            </li>
            <hr className="border-1 mt-4 mb-4"/>
            <li className="flex justify-between">
                <p className="font-bold text-sm lg:text-xl">Minimum Temperature</p>
                <p className="font-bold text-sm lg:text-xl">{Math.round(someData.main.temp_min,2)} deg C</p>
            </li>
            <hr className="border-1 mt-4 mb-4"/>
            <li className="flex justify-between">
                <p className="font-bold text-sm lg:text-xl">Visibility</p>
                <p className="font-bold text-sm lg:text-xl">{someData.visibility} VI</p>
            </li>
           </ul>
        </div>
        <div className="lg:flex">
            <div className="sun-rise-container lg:w-1/2 mt-10 p-7 text-white rounded-md lg:mr-6">
                <h1 className="font-bold text-xl text-center">Sunrise</h1>
                <div className="flex justify-between">
                    <IoSunnyOutline className="text-white font-bold sunsetImage-image"/>
                    <p className="font-bold text-md self-center lg:text-lg">{sunRiseOutput}</p>
                </div>
                <hr className="border-1 mt-4 mb-4"/>
                <ul>
                <li className="flex justify-between">
                    <p className="font-bold text-xl">Temperature</p>
                    <p className="font-bold text-md lg:text-xl">{Math.round(someData.main.temp_max,2)} deg C</p>
                </li>
                <hr className="border-1 mt-4 mb-4"/>
                </ul>
            </div>
            <div className="sun-rise-container lg:w-1/2 mt-10 p-7 text-white rounded-md">
                <h1 className="font-bold text-xl text-center">SunSet</h1>
                <div className="flex justify-between">
                    <FaMoon className="text-white font-bold sunsetImage-image"/>
                    <p className="font-bold text-md self-center lg:text-lg">{sunSetOutput}</p>
                </div>
                <hr className="border-1 mt-4 mb-4"/>
                <ul>
                <li className="flex justify-between">
                    <p className="font-bold text-xl">Temperature</p>
                    <p className="font-bold text-md lg:text-xl">{Math.round(someData.main.temp_min,2)} deg C</p>
                </li>
                <hr className="border-1 mt-4 mb-4"/>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default WeatherDetails