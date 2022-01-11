import React from 'react'
 /*class ClassComponent extends React.Component{
     render(){
         console.log(this.props.hero);
         return(
             <div>
                 <h1>This is a classcomponent</h1>
                 <img src="" alt="nature image" width="25%"/>
             </div>
         )
     }
//  }*/
 function ClassComponent(props){
     console.log(props.hero)
     return(
         <div>
             <p>this is a props method</p>
             <h1>Props</h1>
         </div>
     )
 }
 export default ClassComponent;