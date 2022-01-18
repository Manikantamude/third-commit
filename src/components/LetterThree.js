import React from 'react'
class LetterThree extends React.Component{
    constructor(){
        super();
       this.state={
            Cartoon:[{cars:"fortuner",color:"black",fruits:"orange"}],
            spiderman:"tobey",
            ironman:"robert downey",
            wonderwomen:"galdot",
            cars:[
                    {id:1,carname:"fortuner",color:"black"},
                    {id:2,carname:"endeavour",color:"white"},
                    {id:3,carname:"i20",color:"greay"},
                    {id:4,carname:"innovia",color:"white"}
        
                ]
        }
    }
    render(){
        const m=this.state.cars.filter((i)=>{return i.id===2})
        console.log("data from filter is ",m[0])
        // first two lines props
        const {name,age}=this.props;
        console.log("displaying props",this.props)
        // next line is for state
        const {ironman,spiderman}=this.state;
        // next two lines for state but an array
        console.log("array cartoon",this.state.Cartoon)
        const {color,fruits}=this.state.Cartoon[0]
        console.log(this.props.say)
        console.log(this.props.name)
        return(
            <div>
                <p>{name} {age}</p>
                <p>{fruits} {color} </p>
            </div>
        )
    }
}
export default LetterThree;