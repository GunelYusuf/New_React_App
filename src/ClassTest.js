import React from "react";

 export const TestClass = ()=>{
    return <p>This is functio component</p>
}

class ClassTest extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
    
        return( 
        <p>It is a Class Component </p>
        )
    }
}

export default ClassTest;
