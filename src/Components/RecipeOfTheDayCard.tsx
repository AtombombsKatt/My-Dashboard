import { recipes } from "../data/RecipesData"
import { RandomizeArray } from "./RandomizeArray";


export default function RecipeOfTheDay(){
    const index = RandomizeArray(recipes.length);

    return(
        <div className="flex flex-col items-center">
            <h2>Dagens recept</h2>
            <h2>{recipes[index].title}</h2>
            <p>{recipes[index].category}</p>
            <img className=" w-full h-36 object-contain"src={recipes[index].img}/>
            
        </div>
    )
}