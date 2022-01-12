import React from "react"
class First extends React.Component{
    render(){
        return(
            <div>
                 {this.props.ym}
                <p>this is a first component</p>
            </div>
        )
    }
}
export default First;