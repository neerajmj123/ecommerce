import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        try {
            const response = await axios.post('http://localhost:4000/signin', {
                email,
                password,
            });
            console.log("Response from server:", response.data);
            if (response.data && response.data.statusCode === 200) {
                const { token, role, message } = response.data.data;

                // Ensure token is set in localStorage
                localStorage.setItem('token', token);

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: message,
                }).then(() => {
                    if (role === "seller") {
                        navigate('/seller');
                    } else if (role === 'buyer') {
                        navigate('/');
                    }
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.data.message || "Invalid credentials, please try again"
                });
                localStorage.removeItem('token');
            }
        } catch (error) {
            console.error('Signin error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data?.message || 'Failed to sign in',
            });
            localStorage.removeItem('token');
        } finally {
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#39a9ad] to-[#aea720cd]">
            <div className="bg-white shadow-md rounded px-8 py-6 w-96">
                <h2 className="text-2xl mb-4 font-bold text-center text-gray-800">Sign In</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Don't have an account? 
                        <Link to="/signup" className="text-primary hover:text-secondary text-sm font-bold ml-1">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;
