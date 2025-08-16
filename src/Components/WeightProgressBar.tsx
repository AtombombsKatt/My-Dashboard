import { weightData } from "../data/weightData"
const currentWeight = weightData[12].weight;
const startingWeight = weightData[0].weight;
const goal = 75;

const progress = ((startingWeight - currentWeight) / (startingWeight - goal) * 100);
export default function WeightProgressBar(){
    return(
        <div>
            <h2 className="font-semibold">Mål: {goal}Kg </h2>    
            <div className="w-64 h-6 rounded-full bg-gray-400 mt-4">
                <div className="bg-green-500 h-6 rounded-full shadow-lg flex justify-center items-center"style={{width: progress + "%"}}>
                    <p>{progress.toFixed(0)}%</p>
                </div>
            </div>
        </div>
    )
}