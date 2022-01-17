import React from 'react'

class Storage extends React.Component{
    call=()=>{
        var m=18;
        alert(m);
    }
    // state={
    //     name:"react.js",
    //     year:2011,
    // }
    render(){
    //     // setTimeout(()=>{
    //     //     this.setState({
    //     //         name:"react.json"
    //     //     })
    //     // },5000)
    //     // return(
    //     //     <div id="md">
    //     //         <p>{this.state.name}</p>
    //     //         <p>{this.state.year}</p>
    //     //     </div>
    //     // )
    //     return React.createElement("div",{id:"md"},React.createElement("h1",null,"Example tag"))
    // }
    return(
        <div>
            <button onClick={this.call}>Submit</button>
        </div>
    )
    }
}
export default Storage;