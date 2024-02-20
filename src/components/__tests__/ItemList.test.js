import ItemList from "../ItemList";
import '@testing-library/jest-dom'
import { screen,render } from "@testing-library/react"
import Mock_Data from "../Mock/ItemList.json"
import { Provider } from "react-redux";


test('should load', () => { 
    
    render(
        <BrowserRouter>

    <Provider items = {Mock_Data}>
        <ItemList/>
        </Provider>
        </BrowserRouter>


    );

  
      const name = screen.getByText("Meals and Deals : Better With Pepsi (Save upto 38%)")
      expect(name).toBeInTheDocument();
   
       
   })