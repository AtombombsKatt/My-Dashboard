import { Link } from "react-router-dom"
import { recipes } from "../data/RecipesData"
export default function RecipePage(){
    return(
        <div className="min-w-96">
            <div className="bg-slate-200 border-blue-500 border-2 p-4 rounded">
            <h1 className="text-black mb-4">Recept</h1>
                <ul className="  flex flex-col justify- space-y-5">
                   {recipes.map((recipe) =>(
                    <li  className="bg-[#242424] rounded-lg shadow-lg p-2"key={recipe.id}>
                        <Link className=" text-gray-100 text-xl hover:text-yellow-700 transition-all duration-500 hover:text-2xl" to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                   ))}
                </ul>
            </div>  
        </div>
    )
}