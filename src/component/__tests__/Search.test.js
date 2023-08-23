import { render } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data"
import { log } from "console"

//Its a Dummy Global  fetch functin Given by Jest
//Its return a Promise
global.fetch = jest.fn(() => {
   return  Promise.resolve({
        json:()=>{Promise.resolve(RESTAURANT_DATA)}
    })
})
test("search Result on Home page", () => {
     const body= render(<StaticRouter><Provider store={store}><Body> </Body></Provider></StaticRouter>)
//console.log(body);
const search=body.getByTestId("search-btn")
console.log(search);

})


test("Shimmer should Load on Home page", () => {
     const body= render(<StaticRouter><Provider store={store}><Body> </Body></Provider></StaticRouter>)
//console.log(body);
    const shimmer = body.getByTestId("shimmer")
    expect(shimmer).toBeInTheDocument()
console.log(shimmer);

})