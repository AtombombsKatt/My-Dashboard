import GraphPage from "../pages/GraphPage"
import Home from "../pages/HomePage"
import {Routes, Route} from "react-router-dom"
import RecipePage from "../pages/RecipePage"
import RecipeDetailPage from "../pages/RecipeDetailPage"
import ActivityTracker from "../pages/ActivityTracker"
export default function MainContent(){
    return(
        <main className="w-full p-4 flex justify-center">
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