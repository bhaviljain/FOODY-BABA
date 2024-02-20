import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import Mock_Data from "../Mock/SearchRes.json"
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json : () =>{
        return Promise.resolve()
    }
  })
}),

test('should first', async() => { 
    await act(async()=>
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
            )
    )
    

    const cardsBeforesearch = screen.getAllByTestId("resCard")

    expect(cardsBeforesearch.length).toBe(20)

//   const searchBtn = screen.getByRole('button', {name: "SEARCH"})
//   const searchInput = screen.getByTestId("searchInput")

//   fireEvent.change(searchInput ,{target :{value:"burger"}})

//   fireEvent.click(searchBtn)

// const cards = screen.getAllByTestId("resCard")

// expect(cards.length).toBe(7)
 })

// whenevr you doing a state update and async operation then wrap the test in act
