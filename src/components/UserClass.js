import React from "react"
class UserClass extends React.Component {
 // class based component
 constructor(props)
 {
  super(props)

 //how to create state in class component
 this.state= {

userInfo : {
  name: "Bhavil",
  avatar_url:"dummy.photo"
}
}
console.log('constructor');
}
async componentDidMount()
{
  console.log("mount");
  const data = await fetch("https://api.github.com/users/bhaviljain");
  const json = await data.json();

  this.setState({
userInfo: json
  })
  console.log(json);
}
componentDidUpdate()
{
  console.log('update');
}
  render()
  {
    console.log('render');
    //destructuing
    // const {name ,location} = this.props
    // const {count,count2} = this.state
    // debugger;
    return(
        <>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name: {this.state.userInfo.login}</h2>
        {/* <h2>Name: {this.state.userInfo.avatar_url}</h2> */}
        {/* <h2>{this.state.count}</h2>
        <h2>{this.state.count2}</h2> */}
        {/* <button
        onClick={()=>{
          this.setState({
            count : this.state.count + 1 ,
            count2 : this.state.count2 + 2 
            //joh setCount likhte ha fucntion based mein usse class based meint this.setstate ke under likhte hain
          })
        }}
        >Increase Count</button> */}
        {/* <h2>location : {location}</h2> */}
        </>
    )
  }


}
export default UserClass

//why do we always have to use super props ?
// to allow a component to inherit the properties of its parent component and also pass in additional properties as arguments to the component.

//When we call this super(props), we are basically calling the constructor of React.Component. So we can say that super() is a reference to the parent class constructor i.e. React.Component

//React Life Cycle?
// first constructor method is called then render method is called and then react updates the DOM and then componentDidMount is called. React batches child and batches mount , thats why react is fast
// BhahvilllllChild constructor //render phase
// BhahvilllllChild render      //render phase
// elonChild constructor        //render phase
// elonChild render             //render phase
// dom updates 
// Bhahvilllllchild mount       //commit phase
// elonchild mount               //commit phase

//first the constructor is called and then the render in which html code(dummy data) is shown for few milisec and then component did mount is called where the this.setState is updates, after that again render method is called which shows the data which fetched in component did mount