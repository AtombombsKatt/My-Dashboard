import GraphPage from "../pages/GraphPage"
import Home from "../pages/HomePage"
import {Routes, Route} from "react-router-dom"
import RecipePage from "../pages/RecipePage"
import RecipeDetailPage from "../pages/RecipeDetailPage"
import ActivityTracker from "../pages/ActivityTracker"
import { useTheme } from "../Hooks/useTheme";
import { themes } from "../Styles/ThemeColors";

export default function MainContent(){
  const {theme} = useTheme();

   
    return(
        <main className="w-full p-4 flex justify-center"
      style={{
        backgroundColor: themes[theme].background,
        color: themes[theme].text,
      }}
    >
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="graph" element={<GraphPage />}/>
                <Route path="/recipes" element={<RecipePage/>}/>
                <Route path="/recipes/:id" element={<RecipeDetailPage/>}/>
                <Route path="/workout" element={<ActivityTracker/>}/>
            </Routes>
        </main>
    )
}