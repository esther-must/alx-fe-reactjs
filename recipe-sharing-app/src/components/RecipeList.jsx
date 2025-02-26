import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <FavoriteButton recipeId={recipe.id} />
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    );
};

export default RecipeList;

