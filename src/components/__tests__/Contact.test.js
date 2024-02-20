import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Contact from '../Contact';

describe('Contact', () =>{

  // beforeAll(() =>{
  //   console.log("beforeAll");
  // })

  // afterAll(() =>{
  //   console.log("afterAll");
  // })

  // beforeEach(() =>{
  //   console.log("beforeEach");
  // })
  // afterEach(() =>{
  //   console.log("afterEach");
  // })
test('should load contactUs form', () => { 
  render(<Contact/>)

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
 
     
 })
it('should load contactUs form', () => { 
  render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox");

 console.log(inputBoxes.length);
 expect(inputBoxes.length).toBe(5);
     
 })
})