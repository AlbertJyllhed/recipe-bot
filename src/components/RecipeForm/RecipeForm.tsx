import { useState, type SubmitEvent } from "react";
import type { RecipeRequest } from "../../types/types";
import "./RecipeForm.css";

interface RecipeFormProps {
    onSubmitRecipe: (prompt: RecipeRequest) => void;
}

function RecipeForm({ onSubmitRecipe }: RecipeFormProps) {
    const [prompt, setPrompt] = useState<string>("");

    const handleSubmitRecipe = (e: SubmitEvent) => {
        e.preventDefault();
        onSubmitRecipe({ prompt });
    };

    return (
        <form onSubmit={handleSubmitRecipe} className="container">
            <h2>Vad vill du ha för recept?</h2>
            <div className="inner-container input-area">
                <textarea
                    placeholder="Skriv dina instuktioner här..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button type="submit">Generera Recept</button>
            </div>
        </form>
    );
}

export default RecipeForm;
