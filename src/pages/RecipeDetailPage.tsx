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
        <div className=" bg-slate-200 text-black font-serif flex flex-col border-blue-500 border-2 rounded-lg p-4">
            <div className="max-w-96 h-auto ml-16">
                <img src={recipe.img}/>
            </div>
            <h1>{recipe.title}</h1>
            <h2 className="text-xl">{recipe.description}</h2>
            <ul className="text-lg flex flex-col space-y-2">
                {recipe.ingredients.map((item, index)=> (
                    <li key={index}>{item} </li>
                ))}
            </ul>
            <h2 className="text-xl font-bold mt-4">Kalorier: ca {recipe.calories}</h2>
            <div className="mt-6 ">
                <Link className="font-bold text-xl text-black hover:text-yellow-600 transition-all duration-500 hover:text-2xl"to="/recipes">Tillbaka till recept</Link>
            </div>
        </div>
    )
}
// mappa ingredensier sen