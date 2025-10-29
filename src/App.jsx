


import './App.css'
import Developer from './components/Developer'
import Developers from './components/Developers'

function App() {

  const developers = [

    {
     name:"Shuvo",
     stack:"Mern",
     role: "jr.software eng",
     company_name: "bd calling"
  },
    {
     name:"sajed",
     stack:"mern",
     role: "jr.fornted dev",
     company_name: "softknite"
  },
    {
     name:"refat",
     stack:"mern",
     role: "backend",
     company_name: "Knitelife"
  },
    {
     name:"sabbir",
     stack:" mern",
     role: "senior.frontend",
     company_name: "Soft tech"
  },
]
  

  return (
    <>
     
   <Developers developers={developers}></Developers>
     
      
    </>
  )
}

export default App
