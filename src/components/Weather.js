import { Children } from "react/cjs/react.production.min"

export const WeatherData=({city,degree,unit,children})=>{
    return(
       console.log('of'),
        <div>
         <p>Today the weather in {city} is {degree} {unit}</p>
        {children}
        </div>
     
    )
}