import './App.css'
import Banner from './components/Banner'
import FooterButton from './components/FooterButton'
import MainSection from './components/Mainsection'
import Navbar from './components/Navbar'
import PrichingCart from './components/PrichingCart'
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
    <PrichingCart/>
    <FooterButton/>
    </div>
  )
}

export default App
