import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {

  const navigate = useNavigate();
  const allRecipies = useLoaderData();
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* 🚀 Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Discover Delicious Recipes 🍽️
          </h1>
          <p className="text-gray-600 mb-6">
            Explore a world of flavors, ingredients, and step-by-step instructions to cook amazing dishes at home.
          </p>
          <button onClick={() => navigate("/addFoodRecipie")} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Explore Recipes
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/16/16/spaghetti-1838412_960_720.jpg"
            alt="Food"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>

      {/* 📋 Recipes Section */}
      <h2 className="text-3xl font-bold mb-6 text-center">All Recipes</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {allRecipies.map((recipe) => (
          <div key={recipe._id} className="bg-white shadow-md rounded-lg p-5 border relative">
            {/* ❤️ Heart Icon */}
            <button
              className="absolute top-3 right-3 text-red-500 text-xl hover:scale-110 transition"
              onClick={() => toggleFavourite(recipe._id)}
            >
              <FaHeart color={favourites.includes(recipe._id) ? "red" : "gray"} />
            </button>

            <h3 className="text-xl font-semibold mb-2 text-blue-600">{recipe.title}</h3>
            <p className="mb-2"><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
