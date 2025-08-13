import { Link } from "react-router-dom"
import { recipes } from "../data/RecipesData"
export default function RecipePage(){
    return(
        <div className="min-w-96">
            <h1>Recept</h1>
            <div className="bg-slate-500 ">
                <ul className="  flex flex-col justify- space-y-5">
                   {recipes.map((recipe) =>(
                    <li  className="bg-slate-400"key={recipe.id}>
                        <Link className="text-black font-serif text-xl" to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                   ))}
                </ul>
            </div>  
        </div>
    )
}