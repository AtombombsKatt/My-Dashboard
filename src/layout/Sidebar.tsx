import { Link } from "react-router-dom"

import ThemeSelector from "../Components/ThemeSelector"

export default function Sidebar(){
    return(<div className="">
        <ul className="">
            <li className="m-2" ><Link className="text-gray-200 text-lg" to="/">Home</Link></li>
            <li className="m-2"><Link className="text-gray-200 text-lg" to="/graph">Vikt karta</Link></li>
            <li className="m-2"><Link className="text-gray-200 text-lg"  to="/recipes">Recept</Link></li>
            <li className="m-2"><Link className="text-gray-200 text-lg" to="/workout">Träning</Link></li>
            
        </ul>
        <ThemeSelector />
    </div>
    )
}