import { weightData } from "../data/weightData"
export default function WeightCard(){
    const latest = weightData[weightData.length - 1].weight;

    return(
    <div className="bg-white text-black p-4 rounded-lg shadow w-64 ">
        <h3 className="text-lg font-bold">Nuvarande vikt</h3>
        <p className="text-2xl">{latest} kg</p>
    </div>
    );
}