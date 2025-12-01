import React from "react";
function Contact(){
    return(
        <>
        <div id="contact" className="bg-gray-100 py-10">
            <h1 className="text-3xl font-bold text-center m-3">Contact</h1>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
            <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
            <div className="space-y-4">
                <div>
                <label className="block text-gray-700 font-medium">EmailID</label>
                <input type="text" className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 text-gray-700"/>
                </div>
                <div>
                <label className="block text-gray-700 font-medium">Github</label>
                <input type="text" className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 text-gray-700"/>
                </div>
                <div>
                <label className="block text-gray-700 font-medium">LinkedIn</label>
                <input type="text" className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 text-gray-700"/>
                </div>
               
               
            </div>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
                <form className="flex flex-col space-y-4">
                    <label className="block text-gray-700 font-medium">Username</label>
                    <input type="text"  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input type="email"  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <label className="block text-gray-700 font-medium">PhoneNumber</label>
                    <input type="number"  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
                </form>
            </div>
            </div>
        </div>
        </>
    )
}
export default Contact;