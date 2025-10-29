


import { Suspense } from 'react'
import './App.css'
import Developer from './components/Developer'
import Developers from './components/Developers'

 const developerDataFetch= () =>{
  const data = fetch('developers.json')
  .then((res) => res.json())
  
  return data;
 }

function App() {

  const developersPromise= developerDataFetch();

//   const developers = [

//     {
//      name:"Shuvo",
//      stack:"Mern",
//      role: "jr.software eng",
//      company_name: "bd calling",
//      isEmployee: true,
//   },
//     {
//      name:"sajed",
//      stack:"mern",
//      role: "jr.fornted dev",
//      company_name: "softknite",
//      isEmployee: false,
//   },
//     {
//      name:"refat",
//      stack:"mern",
//      role: "backend",
//      company_name: "Knitelife",
//      isEmployee: true
//   },
//     {
//      name:"sabbir",
//      stack:" mern",
//      role: "senior.frontend",
//      company_name: "Soft tech",
//      isEmployee: false
//   },
// ]
  

  return (
    <>
     
     <Suspense fallback={<p> Loading.....</p>}>
       <Developers developersPromise={developersPromise}></Developers>
     </Suspense>
     
      
    </>
  )
}

export default App
