import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Ensure all fields are filled
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    // Convert ingredients and instructions to an array
    const newRecipe = {
      id: Date.now(), // Temporary ID
      title,
      summary: instructions.substring(0, 100) + "...", // Generate a short summary
      image: "https://via.placeholder.com/150", // Placeholder image
      ingredients: ingredients.split("\n").map((item) => item.trim()), // Convert to array
      instructions: instructions.split("\n").map((step) => step.trim()), // Convert to array
    };

    // Pass new recipe to parent component
    onAddRecipe(newRecipe);

    // Reset form fields
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block font-semibold">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold">Ingredients (one per line)</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients, each on a new line"
          ></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold">Preparation Steps (one per line)</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="List steps, each on a new line"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
