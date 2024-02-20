import UserClass from "./UserClass"
import { FunctionComp } from "./Function"
import { Component } from "react"
import Header from "./Header";

class Aboutus extends Component
{
    constructor(props)
    {
        super(props);
        console.log("parent constructor");
    }


    componentDidMount()
    {
    //   console.log("parent mount");
    }
    render()
    {
        console.log("parent render");

        return(
            <>
        
              <h2 className="text1">
                
Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</h2>

   <UserClass name={"Bhahvilllll"} location = {"Bombay"} />

  <FunctionComp name={"Bhaahahahvil"} />
            </>
        )
    }
}

// const Aboutus = () =>{

//     return(

//         <div>
//    <h2 className="text1">
// Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</h2>

//    <UserClass name={"Bhahvilllll"} location = {"Bombay"} />

//   <FunctionComp name={"Bhaahahahvil"} />
//         </div>
    
//     )

// }

export default Aboutus