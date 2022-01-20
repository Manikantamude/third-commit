import React,{PureComponent} from 'react'

class Regular extends PureComponent{
    constructor(){
        super();
        this.state={
            choice:"Mani"
        }
    }
    componentDidMount(){
        this.setState({
            chioce:"Mani"
        })
    }
    render(){
        console.log("from regular component")
        return(
            <div>
                <p>{this.state.choice}</p>
            </div>
        )
    }
}
export default Regular;