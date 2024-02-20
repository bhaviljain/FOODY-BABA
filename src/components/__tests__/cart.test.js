import { act } from "react-dom/test-utils"
import Mock_Data from "../Mock/resMenu.json"
import { fireEvent, render } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { Provider } from "react-redux"
import addStore from '../utils/addStore'
global.fetch = jest.fn(()=>
 Promise.resolve({
json : ()=> Promise.resolve(Mock_Data),
})

)
it('should load card full', async()=>{
    await act(async ()=>render(
        <Provider store={addStore}>
        <RestaurantMenu />
        </Provider>
    ))
    const card = screen.getByText("Whopper (11)")
    fireEvent.click(card)

})