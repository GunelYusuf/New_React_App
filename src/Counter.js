import React from "react";

const buttonStyle = {
    minWidth:'64px',
    padding:'8px 0'
}

export const Counter = () =>{

    const [counter,setCounter] = React.useState(1);

    const handleDecreaseClick=()=>{
      setCounter((oldCounter)=> oldCounter>1 ? oldCounter - 1 : oldCounter)
             
    }
    const handleIncreaseClick=()=>{
        setCounter((oldCounter)=>  oldCounter + 1)
    }
    return (
        <div>
            <h4>{counter}</h4>
            <button style={buttonStyle} onClick={handleDecreaseClick}>-</button>
            <button style={buttonStyle} onClick={handleIncreaseClick}>+</button>
        </div>
    )
}