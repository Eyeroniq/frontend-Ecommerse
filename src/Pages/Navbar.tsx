import { NavLink } from "react-router-dom";
import { useState } from "react";
import './../css/Button.css';
import logo from "./../assets/ring.png"
import god from "./../assets/Asset 10-8.png"
import './../App.css'




export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const logoDropDown = () => {
        setIsOpen(!isOpen)
    }
   return (
        <div >
            <nav className=" fixed z-30  bg-transparent flex  w-full justify-between p-6 " >
                <div>
                     <img src={logo} alt="logo" onClick={logoDropDown} className="slow-spin w-10 stop-spin sm:w-20  sm:h-20 " />
                </div>
                <div className="space-x-4">
                    <NavLink className="hidden sm:inline-block " to="/">
                        <div>
                            <button className="button" >login</button>
                            <div className="drip-1"></div>
                            <div className="drip-2"></div>
                            <div className="drip-3"></div>
                        </div>
                    </NavLink>
                    <NavLink to="/"> Bag </NavLink>
                </div>
            </nav>
            <div className="absolute top-0 w-full bg-transparent z-10 flex justify-center items-center p-6">
                       <div className="flex items-center">
            <img className="w-35 h-24" src={god} alt="40.GOD" />     
                      </div>
            </div>

          {
            isOpen&&(
                <div className="fixed z-10 mt-20 p-3 pt-12">
                <a href="/Option1" className="block font-bold text-xl hover:text-gray-700 py-2">Option1</a>
                <a href="/Option2" className="block font-bold text-xl hover:text-gray-700 py-2">Option2</a>
                <a href="/Option3" className="block font-bold text-xl hover:text-gray-700 py-2">Option3</a>
                <a href="/Option4" className="block font-bold text-xl hover:text-gray-700 py-2">Option4</a>
            </div>
            
            )
          }
        </div>
    )
} 