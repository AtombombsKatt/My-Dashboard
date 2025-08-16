import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { weightData } from '../data/weightData';
let totalweight: number = 0;
let totalDates: number = 0;
let avgWeight: number;
let currentWeight: number = 0;
let startingWeight: number = 0;
let weightLoss: number = 0;


for (let i = 0; i < weightData.length; i++) {
    totalweight += weightData[i].weight;
    totalDates ++;
    avgWeight = totalweight / totalDates;
    if(i +1 == weightData.length){
        currentWeight = weightData[i].weight;
    }
    if(i == 0){
        startingWeight = weightData[i].weight;
    }
}
        
weightLoss = startingWeight - currentWeight;
    
export default function GraphPage(){
    return(
        <div className="bg-slate-200 mt-8 p-4 border-blue-500 border-2 rounded-lg shadow w-1/2 h-3/4">
            <h2 className='text-lg text-black font-semibold'>Vikt över tid</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="date"/>
                <YAxis domain={[75, 80]}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
            </ResponsiveContainer>

            <div className="text-black font-semibold text-lg space-y-1">
  <div className="flex justify-between">
    <span>Genomsnittlig vikt:</span>
    <span>{avgWeight.toFixed(2)} kg</span>
  </div>
  <div className="flex justify-between">
    <span>Vikt vid start:</span>
    <span>{startingWeight} kg</span>
  </div>
  <div className="flex justify-between">
    <span>Nuvarande vikt:</span>
    <span>{currentWeight} kg</span>
  </div>
  <div className="flex justify-between">
    <span>Du har gått ner:</span>
    <span>{weightLoss.toFixed(2)} kg</span>
  </div>
</div>
        </div>
    )
}