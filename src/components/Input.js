import {Component} from 'react'

class Input extends Component{
    constructor(){
        super();
       this.state={
                username:"",
                password:""
        }
        this.Send=this.Send.bind(this);
    }
    handleUserName=(e)=>{
        // console.log(e)
        this.setState({
            [e.target.name]:e.target.value
            
        })
    }
    Send(){
        console.log(this.state.username)
        console.log(this.state.password)
        this.setState({
            username:"",
            password:""
        })
    }
    // handlePassword=(e)=>{
    //     this.setState({
    //         password:e.target.value
    //     })
    // }
    render(){
        return(
            <div>
                <input type="text" name="username" value={this.state.username} placeholder="enter username" onChange={this.handleUserName} />
                <input type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.handleUserName} />
                {/* <p>username:{this.state.username}</p>
                <p>password:{this.state.password}</p> */}
                <button onClick={this.Send}>Send</button>
            </div>
        )
    }
}
export default Input;