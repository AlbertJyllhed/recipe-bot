import type { Recipe, RecipeRequest } from "../types/types";

export async function generateRecipe(request: RecipeRequest): Promise<Recipe> {
    const response = await fetch(
        "https://localhost:7044/api/recipes/generate",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        },
    );
    return await response.json();
}
