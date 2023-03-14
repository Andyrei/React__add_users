import './App.css'
import AddUsers from './components/AddUsers'
import ShowUsers from './components/ShowUsers'

function App() {  
return (
    <div className="max-w-5xl my-20 mx-auto">
      <h1 className="text-3xl text-center font-bold underline my-20"> Insert new users </h1>
        <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 space-x-3">
          <AddUsers />
          <ShowUsers />
        </div>
    </div>
  )
}

export default App
