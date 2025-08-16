import { ReminderData } from "../data/ReminderData"
import { RandomizeArray } from "./RandomizeArray"

export default function ReminderCard(){
    const index = RandomizeArray(ReminderData.length);
    return(
        <div>
            <h2 className="font-semibold">{ReminderData[index].advice}</h2>
        </div>
    )
}