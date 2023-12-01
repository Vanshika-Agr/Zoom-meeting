import React from 'react'
import {Link} from 'react-router-dom'
function Signup(){
        return (
            <main className="w-full flex">
                <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
                    <div className="z-10 w-full max-w-md">
                        
                        <div className=" mt-13 space-y-3">
                            <h3 className="text-white text-5xl font-bold mb-6 ml-10">Join Us Now!</h3>
                
                            <div className="flex items-center -space-x-2 overflow-hidden ml-10 mb-11">
                                <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 my-auto h-[500px]"
                        style={{
                            background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", filter: "blur(118px)"
                        }}
                    >
    
                    </div>
                </div>
                
                <div className="flex-1 flex items-center justify-center h-screen">
                    <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                        <div className="">
                            <div className="mt-4 space-y-5">
                                <h3 className="text-gray-800 text-2xl mb-4 font-bold sm:text-3xl">Sign up</h3>
                                <span className="mt-7">Already have an account? </span><Link to="/signup/login"><span className="font-medium text-purple-500 hover:text-voilet-500">Log in</span></Link>
                            </div>
                        </div>

                        
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                            <div className="grid grid-cols-2 gap-x-3">
                            <div>
                                <label className="font-medium">
                                   First Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className=" mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                   Last Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="mt-2 px-4 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            
                    <div class="flex items-center">
                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 my-4 text-voilet-800 bg-gray-100 border-gray-300 rounded focus:ring-voilet-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-780"/>
                    <label for="link-checkbox" className="ml-2  text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">terms and conditions</a>.</label></div>

                    <Link to="/dashboard"><button className="w-2/4  px-2 py-1 ml-20 text-white font-medium bg-violet-900 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                        Create account
                    </button></Link>
                        </form>
                    </div>
                </div>
            </main>
        )
}
export default Signup