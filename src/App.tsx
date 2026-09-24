import { useState } from "react";
import { generateRecipe } from "./api/api";
import { type Recipe, type RecipeRequest } from "./types/types";
import "./App.css";

import RecipeForm from "./components/RecipeForm/RecipeForm";
import RecipeCard from "./components/RecipeCard/RecipeCard";

function App() {
    const [recipe, setRecipe] = useState<Recipe>();

    const handleGenerateRecipe = async (request: RecipeRequest) => {
        const response = await generateRecipe(request);
        setRecipe(response);
    };

    return (
        <main>
            <RecipeForm onSubmitRecipe={handleGenerateRecipe} />
            <RecipeCard recipe={recipe} />
        </main>
    );
}

export default App;
