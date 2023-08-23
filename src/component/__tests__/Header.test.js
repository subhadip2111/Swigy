import { render } from "@testing-library/react"
import Header from "../Header"

import { Provider } from "react-redux"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"

test("Logo Should load on rendering header", () => {
    //load header 
    //Then check logo is loded
    const header = render( <StaticRouter> <Provider store={store}><Header /></Provider></StaticRouter>)
    console.log(header);
    //Checking for Logo
    const logo = header.getAllByTestId("logo")

    expect(logo[0].src).toBe("http://localhost/dummy.png")



})



test(" online status  Should be in green  on rendering header", () => {
    //load header 
    //Then check logo is loded
    const header = render( <StaticRouter> <Provider store={store}><Header /></Provider></StaticRouter>)
    console.log(header);
    //Checking for Logo
    const onlineStatus = header.getByTestId("online-status")

    expect(onlineStatus.innerHTML).toBe("green")



})


test("Cart Should have zero Item  on rendering header", () => {
    //load header 
    //Then check logo is loded
    const header = render( <StaticRouter> <Provider store={store}><Header /></Provider></StaticRouter>)
    console.log(header);
    //Checking for Logo
    const card = header.getByTestId("cart")

    expect(card.innerHTML).toBe("<a href=\"/cart\">Cart - 0 items </a>")



})

// Input   Search Box  for Testing --