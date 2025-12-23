import React from "react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#e1e9ff] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white border border-[#5c8df3] rounded-xl overflow-hidden shadow-sm flex">
        
        {/* LEFT IMAGE SECTION */}
        <div className="hidden md:block w-1/2">
          <img
            src="/src/asserts/login.jpeg"
            alt="POS Screen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          
          <h2 className="text-xl font-semibold text-gray-800 mb-1">User Login</h2>
          <p className="text-sm text-gray-500 mb-6">Login using your ID</p>

          <form className="space-y-4">
            {/* USER ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User ID
              </label>
              <input
                type="text"
                placeholder="TLRBY"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* PIN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PIN
              </label>
              <input
                type="password"
                placeholder="0000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium text-sm hover:bg-blue-600 transition"
            >
              Login
            </button>

            {/* SELECT USER BUTTON */}
            <button
              type="button"
              className="w-full border border-blue-500 text-blue-600 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition"
            >
              Select User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
