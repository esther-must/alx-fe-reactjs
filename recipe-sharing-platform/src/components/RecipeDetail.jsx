import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import mockData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = mockData.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-lg">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-60 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside mt-2">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal list-inside mt-2">
        {recipe.instructions?.map((step, index) => (
          <li key={index} className="text-gray-700 mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
