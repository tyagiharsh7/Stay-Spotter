import React from 'react';

const EmailSubscription = () => {
    return (
        <div className="bg-gray-900 text-white p-8 pb-0">
            <h2 className="text-3xl mb-1 text-center">Save time, save money!</h2>
            <h2 className="text-xl mb-3 text-center">Subscribe to our newsletter</h2>
            <form className="flex justify-center space-y-4 space-x-4 w-full">
                <label htmlFor="email" className="sr-only ">Email address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" className="w-52 text-black border-gray-300 rounded-full shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                <button type="submit" className="w-22 bg-green-500 py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Subscribe</button>
            </form>
        </div>
    );
};

export default EmailSubscription;
