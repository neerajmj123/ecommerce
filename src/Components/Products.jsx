import React from "react";
import { FaStar } from "react-icons/fa6";
import img1 from "../assets/women.png"
import img2 from "../assets/women2.jpg"
import img3 from "../assets/women3.jpg"
import img4 from "../assets/women4.jpg"
// import img3 from "../assets/women3.png"
// import img4 from "../assets/women4.png"


const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Selling Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Products
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                        asperiores modi Sit asperiores modi
                    </p>
                </div>
                {/* Body section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* card section */}

                        <div className="space-y-3" >
                            <img
                                src={img1}
                                alt=""
                                className="h-[220px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold">Women Ethnic</h3>
                                <p className="text-sm text-gray-600">Pink</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3" >
                            <img
                                src={img2}
                                alt=""
                                className="h-[220px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold">Women western</h3>
                                <p className="text-sm text-gray-600">Red</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>
                                    5.0
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3" >
                            <img
                                src={img3}
                                alt=""
                                className="h-[220px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold">Goggles</h3>
                                <p className="text-sm text-gray-600">Brown</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>
                                    4.7
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3" >
                            <img
                                src={img4}
                                alt=""
                                className="h-[220px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold">Printed T-Shirt</h3>
                                <p className="text-sm text-gray-600">Yellow</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>
                                    4.4
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3" >
                            <img
                                src={img1}
                                alt=""
                                className="h-[220px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold">Printed T-Shirt</h3>
                                <p className="text-sm text-gray-600">Yellow</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>
                                    4.4
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* view all button */}
                    {/* <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                            View All Button
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default Products