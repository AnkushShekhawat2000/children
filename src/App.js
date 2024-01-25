import react from "react"

import Hello from "./Hello"

const App = ()=>{
return (
    <div>
      
      {/* Ankush */}
      {/* <Hello/> */}

      {/* Akshay */}

      {/* <Hello/> */}
      
     {/*Ravi  */}
      {/* <Hello/> */}


  
        {/* input are same ecery peopke we need only our dynamic input base on our condition*/}
        {/* one approach coming use props */}


  {/* Props */}
  {/* pass the value in componenet */}
  {/* and add condition in Hello component also */}
        
          {/* Ankush */}
        {/* <Hello/> */}

        {/* Akshay */}
        {/* <Hello name="Akshay"/> */}

        {/* Ravi */}
        {/* <Hello/> */}

         {/* this also not good way  there many people if some one has own condition than we add add particular condition in App componenet based on user need this will not helpful*/}

        {/* another way */}
       
 
        <Hello>
          <h1>I am Jadu</h1>
          <button>Click</button>
        </Hello>

        {/* I can those one onlt then we need only pass one */}
        <Hello>
          <button>Only Me</button>
        </Hello>


        {/* we can add another  app component based on our neeed leke counter App */}
       <Hello>
       <h1>Counter App</h1>
        {/* <CounterApp/>  */}
       </Hello>

    </div>
  )
}

export default App