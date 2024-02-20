import {render ,screen} from  "@testing-library/react"
import  RestaurantCard  from '../Restaurandcard';
import Mock_Data from "../Mock/restaurantCard.json"
import "@testing-library/jest-dom"

test('should first', () => {
    
    render(<RestaurantCard resData = {Mock_Data}/>);
    const name = screen.getByText("Chinese Wok")
    expect(name).toBeInTheDocument();

})