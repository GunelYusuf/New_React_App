import React from "react";

 export const TestClass = ()=>{
    return <p>This is functio component</p>
}

class ClassTest extends React.Component{
    constructor(props){
        super(props);

        this.state={name:'',surname:'Yusubov'};
    }

    componentDidMount(){
    console.log('Class based component did mount')
    }

    componentWillUnmount(){
        console.log('Component went');
    }

    render(){
      //this.setState({name: 'Elchin'})

        return( 
        <p>It is a Class Component </p>
        )
    }
}

export default ClassTest;
