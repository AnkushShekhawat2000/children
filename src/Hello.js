import React from "react"


const Hello = (props) =>{

    return (
        // <div>
        //     <h1>I am frontend Developer</h1>
             
        //   {
        //     name=="Akshay" && <p>My name is {name}</p>
        //   }
        //     <p>I am also Backend Developer</p>
        //     <hr></hr>
        // </div>


        // using props
    <div>
        <h1>I am frontend Developer</h1>
        <p>I am also Backend Developer</p>
          {props.children}
        <hr></hr>
    </div>
    )

}

export default Hello