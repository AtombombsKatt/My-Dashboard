
import DashboardCard from "../Components/DashboardCard"
import GraphCard from "../Components/GraphCard"
import WeightCard from "../Components/WeightCard"
import { weightData } from "../data/weightData"
export default function Home(){
    return(
        <div className="grid grid-cols-3 gap-20">
           <DashboardCard title="graf">
                <GraphCard data={weightData}/>
                
           </DashboardCard>
           <DashboardCard title="vikt">
            <WeightCard/>
           </DashboardCard>
        </div>
    )
}