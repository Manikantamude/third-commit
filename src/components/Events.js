import React from 'react'

class Events extends React.Component{
    state={
        Username:"",
        Password:""
    }
    action=()=>{
        this.setState({
            Username:"newuser",
            Password:"amazon"
        })
    }
    render(){
        return(
            <div>
                <p>Username:{this.state.Username}</p>
                <p>Password:{this.state.Password}</p>
                <button onClick={this.action}>Submit</button>
            </div>
        )
    }
}
export default Events;