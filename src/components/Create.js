import React from 'react'
import First from './First'
class Create extends React.Component{
    state={
        name:"mani",
        year:2022,
        gender:"male",
        employee:[{id:1,name:"emp1"},{id:2,name:"emp2"},{id:3,name:"emp3"}]
    }
    render(){
        console.log(this.state)
        console.log("this is render return")
        return(
            <div>
             <p>Name:{this.state.name}</p> 
             <p>Year:{this.state.year}</p>  
            <pre>This is new component</pre>
            <First ym={this.state.name}/>
            <div>
                <p><span>{this.state.employee[1].name}</span></p>
                <p><span>{this.state.employee[0].id}</span></p>
            </div>
            </div>
        
        )
            
    }
}
export default Create;