import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({}); // Fix: Properly define errors state

  // Validate form inputs
  const validate = () => {
    let tempErrors = {};
    
    if (!title.trim()) tempErrors.title = "Title is required.";
    if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required.";
    if (!instructions.trim()) tempErrors.instructions = "Preparation steps are required.";

    setErrors(tempErrors);
    
    return Object.keys(tempErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return; // Stop execution if validation fails

    // Convert ingredients and instructions to an array
    const newRecipe = {
      id: Date.now(), // Temporary unique ID
      title,
      summary: instructions.substring(0, 100) + "...", // Generate a short summary
      image: "https://via.placeholder.com/150", // Placeholder image
      ingredients: ingredients.split("\n").map((item) => item.trim()), // Convert to array
      instructions: instructions.split("\n").map((step) => step.trim()), // Convert to array
    };

    // Pass new recipe to parent component
    onAddRecipe(newRecipe);

    // Reset form fields after successful submission
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

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
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
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
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
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
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
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
