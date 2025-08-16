
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import MainContent from './layout/MainContent'
import './App.css'

function App() {
 

  return (
   <div className='min-h-screen flex flex-col'>
    <header>
      <Navbar />
    </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className=" bg-[#4F8EF7] w-64 p-4">
          <Sidebar />
        </aside>
    <MainContent />
   </div>
   </div>
    
   
  )
}

export default App
