import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()
    const onHandleChange = (e) => {
        let val = (e.target.name === "ingredients") ? e.target.value.split(",") : (e.target.name === "file") ? e.target.files[0] : e.target.value
        setRecipeData(pre => ({ ...pre, [e.target.name]: val }))
    }
    const onHandleSubmit = async (e) => {
        e.preventDefault()
        console.log(recipeData)
        await axios.post("http://localhost:5000/recipie/", recipeData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
            .then(() => navigate("/"))
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Add a New Recipe</h2>
            <form onSubmit={onHandleSubmit} className="space-y-6">
                <div>
                    <label className="block mb-2 font-medium">Title</label>
                    <input type="text" name="title" onChange={onHandleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Time</label>
                    <input type="text" name="time" onChange={onHandleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Ingredients</label>
                    <textarea name="ingredients" rows="4" onChange={onHandleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Separate ingredients with commas" />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Instructions</label>
                    <textarea name="instructions" rows="5" onChange={onHandleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Recipe Image</label>
                    <input type="file" name="file" onChange={onHandleChange}
                        className="w-full px-4 py-2 border rounded-md file:border-0 file:bg-blue-600 file:text-white file:py-2 file:px-4 file:rounded-md hover:file:bg-blue-700" />
                </div>

                <div className="text-center">
                    <button type="submit"
                        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition">
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    )
}
