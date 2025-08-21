import { Link } from "react-router-dom"
import { recipes } from "../data/RecipesData"
import { useTheme } from "../Hooks/useTheme"
import { themes } from "../Styles/ThemeColors"
export default function RecipePage(){
    const {theme} = useTheme();
    const colors = themes[theme];
    return(
        <div className="min-w-96">
            <div className={`${colors.container} ${colors.text} border-2 p-4 rounded`}>
            <h1 className={`mb-4 ${colors.text}`}>Recept</h1>
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
//"bg-slate-200 border-blue-500 border-2 p-4 rounded">