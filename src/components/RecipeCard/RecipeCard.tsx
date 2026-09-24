import type { Recipe } from "../../types/types";
import "./RecipeCard.css";

import ErrorCard from "../ErrorCard/ErrorCard";

function RecipeCard({ recipe }: { recipe: Recipe | undefined }) {
    if (!recipe) {
        return <ErrorCard errorMessage="Inget recept genererat" />;
    }

    return (
        <div className="container recipe-card">
            <h2>{recipe.titel}</h2>
            <div className="inner-container recipe-details">
                <p>
                    <strong>{`${recipe.tillagningstid} min`}</strong>
                </p>
                <p>
                    <strong>{`${recipe.portioner} portioner`}</strong>
                </p>
            </div>
            <div className="inner-container recipe-ingredients">
                <h3>Ingredienser</h3>
                {recipe.ingredienser?.map((ingredient, index) => (
                    <p key={index}>{ingredient}</p>
                ))}
            </div>
            <div className="inner-container recipe-instructions">
                <h3>Instruktioner</h3>
                {recipe.instruktioner?.map((instruction, index) => (
                    <p key={index}>{instruction}</p>
                ))}
            </div>
        </div>
    );
}

export default RecipeCard;
