import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ShopContext } from "./Context/ShopContext";

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* first */}
            <div className="bg-primary/80 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">Mern Store</Link>
                    </div>
                    {/* search */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800" />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                        {/* order */}
                        <Link to='/cart'>
                            <button
                                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-black py-1 px-4 rounded-full flex items-center gap-3 group"
                            >
                                <span className="group-hover:block hidden transition-all duration-200">
                                    Cart
                                </span>
                                <FaCartShopping className="drop-shadow-sm cursor-pointer" />
                                <div className="text-black">
                                    {getTotalCartItems()}
                                </div>
                            </button>
                        </Link>
                        {localStorage.getItem('token') ? (
                            <button onClick={() => { localStorage.removeItem('token'); window.location.replace('/'); }} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-200">
                                Logout
                            </button>
                        ) : (
                            <Link to='/signin'>
                                <button
                                    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-black py-1 px-4 rounded-full flex items-center gap-3 group"
                                >
                                    <span className="group-hover:block hidden transition-all duration-200">
                                        Login
                                    </span>
                                    <MdAccountCircle className="drop-shadow-sm cursor-pointer text-2xl" />
                                </button>
                            </Link>
                        )}
                        <button className="sm:hidden" onClick={toggleMenu}>
                            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
                <ul className="flex flex-col sm:flex-row items-center gap-4">
                    <li key=""><Link to='/' className="inline-block px-4 hover:text-primary duration-200">Shop</Link></li>
                    <li key=""><Link to='/women' className="inline-block px-4 hover:text-primary duration-200">Womens</Link></li>
                    <li key=""><Link to='/kids' className="inline-block px-4 hover:text-primary duration-200">Kids</Link></li>
                    <li key=""><Link to='/men' className="inline-block px-4 hover:text-primary duration-200">Mens</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
