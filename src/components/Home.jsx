import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="min-h-full flex flex-col">
                <main className="flex-grow flex flex-col md:flex-row">
                    {/* Image half */}
                    <div className="w-full md:w-1/2 flex items-center justify-center ">
                        <div className="relative w-full h-64 md:h-full max-h-96">
                            <img
                                src="https://pastatic.picsart.com/cms-pastatic/7d4d155f-a8e4-4e1d-98be-ae307580b068.png?type=webp&to=min&r=-1"
                                alt="PixPro Editor"
                                className="w-full h-full object-contain" // Added classes for responsiveness
                            />
                        </div>
                    </div>

                    {/* Text half */}
                    <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                        <div className="max-w-xl">
                            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                                Redefine Your Images
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
                                Take your photos further with PixPro's free photo editor. Upload, edit, and download instantly from one place.
                            </p>
                            <button onClick={() => {
                                navigate("/edit")
                            }}
                                href="/edit" // This can be replaced with your actual link
                                className="border py-3 px-6 rounded-full mt-4 text-lg font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition duration-200 "
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </main>
            </div>
            <div className="py-12 px-4 ">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        How to edit photos with PixPro's online photo editor?
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        With PixPro's free image editor, you can edit photo online in just 3 simple steps.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto relative">
                    {/* Connecting lines */}
                    <div className="hidden md:block absolute top-12 left-[28%] w-[45%] h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-cyan-500" />

                    {/* Step 1 */}
                    <div className="relative bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                            {/* Replace with actual icon component */}
                            {/* <Upload /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>

                        </div>
                        <h3 className="text-xl font-semibold mb-3">Step 1: Upload photo</h3>
                        <p className="text-muted-foreground">
                            Upload or drag and drop a photo to our photo editor online to start editing.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mx-auto mb-6">
                            {/* Replace with actual icon component */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                            </svg>

                        </div>
                        <h3 className="text-xl font-semibold mb-3">Step 2: Edit photo</h3>
                        <p className="text-muted-foreground">
                            Adjust lighting, color, and exposure, apply photo effects, and customize your photo with text.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                            {/* Replace with actual icon component */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>

                        </div>
                        <h3 className="text-xl font-semibold mb-3">Step 3: Download & share</h3>
                        <p className="text-muted-foreground">
                            Download your edited photo in high-quality JPG, PNG or PDF formats and share it instantly on social media.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
