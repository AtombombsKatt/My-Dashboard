
import DashboardCard from "../Components/DashboardCard"
import GraphCard from "../Components/GraphCard"
import WeightCard from "../Components/WeightCard"
import RecipeCard from "../Components/RecipeCard"
import ReminderCard from "../Components/ReminderCard"
import RecipeOfTheDay from "../Components/RecipeOfTheDayCard"
import ProgressCard from "../Components/ProgressCard"
import { weightData } from "../data/weightData"
export default function Home(){
    return(
        <div className="grid grid-cols-3 gap-x-20 ">
           <DashboardCard title="graf">
                <GraphCard data={weightData}/>
                
           </DashboardCard>
           <DashboardCard title="vikt">
            <WeightCard/>
           </DashboardCard>
           <DashboardCard title="recept">
            <RecipeCard />
           </DashboardCard>
           <DashboardCard title="recpet idag">
                <RecipeOfTheDay />
           </DashboardCard>
           <DashboardCard title="Tips💡">
                <ReminderCard />
           </DashboardCard>

           <DashboardCard title="Progression">
               <ProgressCard />
           </DashboardCard>
        </div>
    )
}