import { recipes } from "../data/RecipesData"
export default function RecipeCard(){
    return(
        <div  className="text-black text-xl  flex flex-col items-center ">
            <p>{recipes[0].title}</p>
            <div>
                <img className=" w-full h-40 object-contain"src={recipes[0].img}/>
                
            </div>
        </div>
    )
}