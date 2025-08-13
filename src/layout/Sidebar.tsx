import { Link } from "react-router-dom"
export default function Sidebar(){
    return(<div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/graph">Vikt karta</Link></li>
            <li><Link to="/recipes">Recept</Link></li>
            
        </ul>
    </div>
    )
}