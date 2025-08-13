import { useParams } from "react-router-dom"
import { recipes } from "../data/RecipesData"

export default function RecipeDetailPage(){
    const {id } = useParams();
    const recipe = recipes.find((r) => r.id === id);
    if(!recipe){
        return <p>Recept hittades inte</p>
    }

    return(
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            
        </div>
    )
}
// mappa ingredensier sen