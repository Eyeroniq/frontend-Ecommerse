import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './../css/Button.css';
import logo from "./../assets/ring.png";
import god from "./../assets/Asset 10-8.png";
import './../App.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-md mx-auto my-6">
                <div className="bg-white dark:bg-black rounded-lg shadow-lg relative flex flex-col w-full p-8">
                    <button
                        className="absolute top-0 right-0 mt-4 mr-4 text-2xl cursor-pointer focus:outline-none"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    <h1 className="text-xl font-semibold mb-4">Login or Create Account</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Enter your credentials to login or create a new account.
                    </p>

                    <form>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Login
                            </button>
                            <button className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                              Sign Up
                            </button>
                            <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
        <nav className="fixed z-30 bg-transparent flex w-full justify-between p-6">
          <div>
            <NavLink to="/">  <img src={logo} alt="logo" onClick={toggleDropDown} className="slow-spin w-10 stop-spin sm:w-20 sm:h-20" /></NavLink>  
          </div>
          <div className="space-x-4">
            <NavLink className="hidden sm:inline-block" to="/">
              <div>
                <button className="button my-text" onClick={openModal}>login</button>
                <div className="drip-1"></div>
                <div className="drip-2"></div>
                <div className="drip-3"></div>
              </div>
            </NavLink>
            <NavLink className="my-text text-xl text-gray-700" to="/Bag"> Bag </NavLink>
          </div>
        </nav>
        <div className="absolute top-0 w-full bg-transparent z-10 flex justify-center items-center p-6">
          <div className="flex items-center">
            <NavLink to="/"> <img className="w-35 h-24" src={god} alt="40.GOD" /></NavLink>
          </div>
        </div>
        {isOpen && (
          <div className="fixed z-10 mt-20 p-3 pt-12">
            <NavLink to="/Option1" className="my-text text-gray-700  block font-bold text-xl hover:text-gray-400 py-2">New</NavLink>
            <NavLink to="/Option2" className="my-text text-gray-700 block font-bold text-xl hover:text-gray-400 py-2">Dripped</NavLink>
            <NavLink to="/Option3" className="my-text text-gray-700 block font-bold text-xl hover:text-gray-400 py-2">All</NavLink>
          </div>
        )}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
};

export default NavBar;
