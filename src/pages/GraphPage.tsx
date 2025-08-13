import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
let totalweight: number = 0;
let totalDates: number = 0;
let avgWeight: number;
const data: {date: string, weight: number}[]= [
    { date: '23/7', weight: 80.0},
    { date: '30/7', weight: 79.6},
    { date: '4/8', weight: 79.5},
    { date: '6/8', weight: 78.8},
    { date: '7/8', weight: 79.0},
    { date: '8/8', weight: 78.2},
    { date: '9/8', weight: 78.9},
    { date: '10/8', weight: 78.3},
    { date: '11/8', weight: 78.5},
    { date: '12/8', weight: 77.9},
    { date: '13/8', weight: 78.2},
]
for (let i = 0; i < data.length; i++) {
    totalweight += data[i].weight;
    totalDates ++;
    avgWeight = totalweight / totalDates;
    
}
export default function GraphPage(){
    return(
        <div className="bg-white p-4 rounded-lg shadow w-1/2 h-3/4">
            <h2 className='text-xl'>Vikt över tid</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="date"/>
                <YAxis domain={[70, 80]}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
            </ResponsiveContainer>

            <div className='bg-blue-500'>
                <h1> Genomsnittlig vikt:  {avgWeight.toFixed(2)}</h1>
                <h1>Under {totalDates} dagar</h1>
            </div>
        </div>
    )
}