import React from "react";

const LoginForm = () => {
    const handleSubmit = () => {
        console.log("Hello there!")
    }
    return(
        <div className="bg-white px-10 py-30 rounded-3xl border-2 border-gray">
            <h1 className="text-4xl font-semibold m-3 text-center mt-6">Welcome Back</h1>
            <p className="font-medium text-lg text-gray-500 mt-4 text-center">Please enter your details.</p>
            <form>
            <div className="mt-6">
                <div className="my-3">
                    <label className="text-lg font-medium">Email</label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter your email" type = "email"/>
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter your password" type="password"/>
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <button className="hover:text-purple-500 underline">Forgot Password</button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <input className="hover: shadow-lg active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-gradient-to-r from-violet-500 to-pink-400  transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold" type="submit" onClick={handleSubmit}/>
                </div>
                <div className="mt-8 mb-4 flex justify-center items-center">
                    <p className="font-medium text-base">Don't have an account?</p>
                    <button className="text-violet-500 text-base font-medium ml-2">Sign Up</button>
                </div>
            </div>
            </form>
            
        </div>
    )
};

export default LoginForm;