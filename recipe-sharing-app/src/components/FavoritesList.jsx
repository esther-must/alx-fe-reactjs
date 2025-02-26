import { useRecipeStore } from './recipeStore';
const FavoritesList = () => {
    const { favorites, recipes } = useRecipeStore((state) => ({
      favorites: state.favorites,
      recipes: state.recipes,
    }));

    const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));
    
    return (
        <div>
            <h2>My Favorites</h2>
            {favoriteRecipes.length > 0 ? (
                <ul>
                    {favoriteRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorite recipes yet.</p>
            )}
        </div>
  );
};

export default FavoritesList;