import { useParams } from "react-router-dom"
import { recipes } from "../data/RecipesData"
import { Link } from "react-router-dom";
export default function RecipeDetailPage(){
    const {id } = useParams();
    const recipe = recipes.find((r) => r.id === id);
    if(!recipe){
        return <p>Recept hittades inte</p>
    }

    return(
        <div className=" bg-slate-300 text-black font-serif flex flex-col border-e-violet-500 rounded-lg p-4">
            <h1>{recipe.title}</h1>
            <h2 className="text-xl">{recipe.description}</h2>
            <ul className="text-lg flex flex-col space-y-2">
                {recipe.ingredients.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="mt-6 ">
                <Link className="font-bold text-xl text-black hover:text-yellow-600 "to="/recipes">Tillbaka till recept</Link>
            </div>
        </div>
    )
}
// mappa ingredensier sen