import {useState} from 'react'

import ClipLoader from "react-spinners/ClipLoader";

import WeatherDetails from '../weatherDetails'
import Header from '../Header'
import './index.css'

const cities=['New Delhi',"Bangalore",'Hyderabad','Chennai',"Kerala","Mumbai",'Jaipur',"Amaravathi",'Kurnool']

const variables={
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"INPROGRESS",
    initial:"INITIAL"
}

const Weather = ()=>{
    
    const [response,setResponse] = useState()
    const [inputValue,setInput] = useState('')
    const [citySuggestions,setSuggestions] = useState([])
    const [weatherDetails,setWeather] = useState()
    const [getVariable,setVariable]=useState(variables.initial)
    const [hiddenLayers,setHidden] = useState(false)

    const onChangeInput=(event)=>{
        setInput(event.target.value)
        const someValue=event.target.value 

        const filteredData = cities.filter((eachCity)=>(
            eachCity.toLowerCase().startsWith(someValue.toLowerCase())
        ))

        setSuggestions(filteredData)
        console.log(filteredData)
        
    }
    
    const onClickSearch=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=4fbe68292e25f738ebd14dcc2409d079`
        const options={
            method:"GET"
        }

        setVariable(variables.inProgress)

        const response = await fetch(url,options)
        const data = await response.json()
        if(response.ok){
           setResponse(data)
           setWeather(data)
           setVariable(variables.success)
        }else{
            setVariable(variables.failure)
        }
        setInput('')
        setHidden(true)
    }
    const renderView=()=>{
        console.log('hello')
        switch(getVariable){
            case variables.success:
                return successView();
            case variables.inProgress:
                return LoadingView();
            case variables.failure:
                return FailureView();
            default:
                return null
        }
        
    }


    const successView=()=>(
        <div>
        <WeatherDetails someData={weatherDetails}/>
        </div>
    )
    const FailureView=()=>(
        <div className='flex h-screen justify-center items-center'>
            <h1 className='text-white font-bold font-sans text-xl'>SomeThing Went Wrong!!!</h1>
        </div>
    )

    const LoadingView=()=>(
        <div className='h-screen flex justify-center items-center'>
            <ClipLoader
        color="#ffffff"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    )
    
    console.log(getVariable)
    return(
        <div className='bg-container' style={{backgroundImage:"url('https://res.cloudinary.com/db0f83m76/image/upload/v1702693389/sun-3588618_1920-1200x800_xwfsxv.jpg')"}}>
        <Header/>
        <div className="p-10 px-20 h-full font-sans flex flex-col items-center  mb-96 lg:mb-64"  >
             
            <div className='flex flex-col items-center bg-white mb-10 justify-center'>
                <div className='flex justify-center self-center items-center'>
                    <input type='text' placeholder='Search...' className="p-3  border-3 border-black border-solid rounded-md w-40 lg:w-80" value={inputValue} onChange={onChangeInput}/>
                    <button type='button' className='ml-6 bg-white h-10 w-28 border-0 rounded-md' onClick={onClickSearch}>
                        Search
                    </button>
                </div>
                <div>
                {
                    inputValue.length>0&&
                <ul className='list-none bg-white text-center w-60 mt-3'>
                    {
                        citySuggestions.map((eachCity,index)=>(
                            <li className="text-black cursor-pointer outline-none" key={index} onClick={()=>{
                                setInput(eachCity)
                            }}>{eachCity}</li>
                        ))
                    }
                </ul>
                }    
                </div>
            </div>
           {renderView()}
        </div>
        </div>
)
    }

export default Weather