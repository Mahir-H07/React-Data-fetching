


import './App.css'
import Developer from './components/Developer'

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
     stack:"laravel",
     role: "backend",
     company_name: "Knitelife"
  },
    {
     name:"sabbir",
     stack:"toto stcak",
     role: "senior.frontend",
     company_name: "Loge achi dot com"
  },
]
  

  return (
    <>
     
      <Developer developers={developers}></Developer>
     
      
    </>
  )
}

export default App
