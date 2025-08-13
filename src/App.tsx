
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import MainContent from './layout/MainContent'
import './App.css'

function App() {
 

  return (
   <div className='min-h-screen flex flex-col'>
    <header className='bg-blue-200'>
      <Navbar />
    </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-blue-900 text-white w-64 p-4">
          <Sidebar />
        </aside>
    <MainContent />
   </div>
   </div>
    
   
  )
}

export default App
