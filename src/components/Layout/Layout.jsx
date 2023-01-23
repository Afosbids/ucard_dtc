import { Outlet } from "react-router-dom"
import OrderDetailNavBar from "../OrderDetailPageComponent/OrderDetailNavBar"
import OrderDetailFooter from "../OrderDetailPageComponent/OrderDetailFooter"


export function Layout () {
    return (
        <div>
            <OrderDetailNavBar />
            {/* <div className="container"> */}
              <Outlet />
            <OrderDetailFooter />
            {/* </div> */}
        </div>
    )
}