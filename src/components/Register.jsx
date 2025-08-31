import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ prefilledUser }) {
  const [user, setUser] = useState(
    prefilledUser || {
      name: "",
      email: "",
      phone: "",
      category: "",
      village: "",
    }
  );

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect to payment with user data
    navigate("/payment", { state: { user } });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 pt-36 pb-10">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Player Registration
        </h1>

        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto"
        >
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded text-black"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded text-black"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-1">Contact Number</label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
              className="w-full p-2 rounded text-black"
            />
          </div>

          {/* Player Category */}
          <div className="mb-4">
            <label className="block mb-1">Player Category</label>
            <select
              name="category"
              value={user.category}
              onChange={handleChange}
              required
              className="w-full p-2 rounded text-black"
            >
              <option value="">Select Category</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="Wicket Keeper">Wicket Keeper</option>
              <option value="All Rounder">All Rounder</option>
            </select>
          </div>

          {/* Village Name */}
          <div className="mb-6">
            <label className="block mb-1">Village Name</label>
            <input
              type="text"
              name="village"
              value={user.village}
              onChange={handleChange}
              required
              className="w-full p-2 rounded text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-2 rounded-xl hover:from-yellow-300 hover:to-orange-400"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
