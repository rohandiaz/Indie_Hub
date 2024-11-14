import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
        // Placeholder for login logic, e.g., API call
        console.log('Login Data:', formData);
        navigate('/dashboard');  // Redirect to dashboard or any other page on successful login
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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

                    {/* Login Button */}
                    <Button type="submit" className="w-full bg-[#6A38C2] hover:bg-[#5b30a6] text-white font-semibold">
                        Log In
                    </Button>
                </form>

                {/* Redirect to Signup */}
                <p className="text-center text-sm text-gray-600">
                    Don't have an account? <a href="/signup" className="text-[#6A38C2] hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
