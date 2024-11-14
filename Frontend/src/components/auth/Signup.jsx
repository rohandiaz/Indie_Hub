import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for signup logic, e.g., API call
        console.log('Form Data:', formData);
        navigate('/login');  // Redirect to login on successful signup
    };

    return (
        <div>
            <Navbar />

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>

                        {/* Sign Up Button */}
                        <Button type="submit" className="w-full bg-[#6A38C2] hover:bg-[#5b30a6] text-white font-semibold">
                            Sign Up
                        </Button>
                    </form>

                    {/* Redirect to Login */}
                    <p className="text-center text-sm text-gray-600">
                        Already have an account? <a href="/login" className="text-[#6A38C2] hover:underline">Log in</a>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Signup;
