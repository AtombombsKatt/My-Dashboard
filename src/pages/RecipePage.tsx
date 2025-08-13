import { Link } from "react-router-dom"
import { recipes } from "../data/RecipesData"
export default function RecipePage(){
    return(
        <div>
            <h1>Recept</h1>
            <div className="bg-gray-500">
                <ul className=" bg-gray-800 flex flex-col justify-between">
                   {recipes.map((recipe) =>(
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                   ))}
                </ul>
            </div>  
        </div>
    )
}