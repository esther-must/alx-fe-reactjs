import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <Router>
      <div>
        <SearchBar />
        <Routes>
          <Route path='/' element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
          <Route path='/favorites' element={<FavoritesList />} />
          <Route path='/recommendations' element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
