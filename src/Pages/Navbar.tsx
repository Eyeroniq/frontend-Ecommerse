import { NavLink } from "react-router-dom";
import './../css/Button.css';
import logo from "./../assets/ring.png"
import god from "./../assets/Asset 10-8.png"
import './../App.css'

export const NavBar = () => {
    return (
        <div>
            <nav className="sticky flex  w-full justify-between p-6 " >
                <div>
                    <NavLink to="/"><img src={logo} alt="logo" className="slow-spin w-10  sm:w-20  sm:h-20 " /> </NavLink>
                </div>
                <div className=" flex sm:ml-20">
                    <img className="item-center w-35 h-24" src={god} alt="40.GOD" />
                </div>
                <div className="space-x-4">
                    <NavLink className="hidden sm:inline-block " to="/">
                        <div>
                            <button className="button">login</button>
                            <div className="drip-1"></div>
                            <div className="drip-2"></div>
                            <div className="drip-3"></div>
                        </div>
                    </NavLink>
                    <NavLink to="/"> Bag </NavLink>
                </div>
            </nav>
        </div>
    )
}