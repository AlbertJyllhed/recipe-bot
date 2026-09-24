import type { Recipe } from "../../types/types";
import "./RecipeCard.css";

function RecipeCard({ recipe }: { recipe: Recipe | undefined }) {
    if (!recipe) {
        return <p>Inget recept genererat</p>;
    }

    return (
        <div className="container recipe-card">
            <h2>{recipe.titel}</h2>
            <div className="inner-container recipe-details">
                <p>
                    <strong>{recipe.tillagningstid}</strong>
                </p>
                <p>
                    <strong>{recipe.portioner}</strong>
                </p>
            </div>
            <div className="inner-container recipe-ingredients">
                {recipe.ingredienser?.map((ingredient, index) => (
                    <p key={index}>{ingredient}</p>
                ))}
            </div>
            <div className="inner-container recipe-instructions">
                {recipe.instruktioner?.map((instruction, index) => (
                    <p key={index}>{instruction}</p>
                ))}
            </div>
        </div>
    );
}

export default RecipeCard;
