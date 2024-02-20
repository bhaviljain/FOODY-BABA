import { Provider } from "react-redux"
import { fireEvent, render , screen } from "@testing-library/react"
import Header from "../Header"
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import addStore from "../../../utils/addStore"

it("should", ()=>{
    render(
        <BrowserRouter>
      <Provider store={addStore}>
        <Header />
        </Provider>
        </BrowserRouter>

    );
    //  const loginBtn = screen.getByText("login")
     const loginBtn = screen.getByRole("button", {name: 'login'})
     expect(loginBtn).toBeInTheDocument();

})
it("should change login btn to logout onclick", ()=>{
    render(
        <BrowserRouter>
      <Provider store={addStore}>
        <Header />
        </Provider>
        </BrowserRouter>

    );
    const loginBtn = screen.getByRole("button", {name: 'login'})

    fireEvent.click(loginBtn)
    //  const loginBtn = screen.getByText("login")

    const logoutbtn = screen.getByRole("button", 
    {name:'user logged out (Login again)'})
    
     expect(logoutbtn).toBeInTheDocument();

})