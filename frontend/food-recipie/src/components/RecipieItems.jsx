import { useLoaderData } from 'react-router-dom';

export default function RecipieItems() {
  const allRecipies = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">All Recipes</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {allRecipies.map((recipe) => (
          <div key={recipe._id} className="bg-white shadow-md rounded-lg p-5 border">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{recipe.name}</h3>
            <p className="text-sm text-gray-500 mb-2">🕒 {new Date(recipe.timestamp).toLocaleString()}</p>
            <p className="mb-2"><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instruction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
