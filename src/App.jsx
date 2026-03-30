import './App.css'
import Banner from './components/Banner'
import MainSection from './components/Mainsection'
import Navbar from './components/Navbar'
import Rating from './components/rating'
import Steps from './components/Steps'

const getData  = async () =>{
  const res = fetch("/data.json");
  return (await res).json();
}

const modelData = getData();

function App() {

  return (
   <div>
    <Navbar/>
    <Banner/>
    <Rating/>
    <MainSection modelData={modelData}/>
    <Steps/>
    </div>
  )
}

export default App
