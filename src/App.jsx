import {useState} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home.jsx"
import CreateContact from "./Components/Contact.jsx"

export default function App(){
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[number,setNumber]=useState("")
  const[arr,setArr]=useState([]);
  const[remove,setRemove]=useState('');
  const[editText,setEditText]=useState('');
  
  return(
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home arr={arr} setArr={setArr}/>}/>
        <Route path="/contact" element={<CreateContact name={name} setName={setName} email={email} setEmail={setEmail} setNumber={setNumber} number={number} arr={arr} setArr={setArr} remove={remove}setRemove={setRemove} editText={editText} setEditText={setEditText} />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

// <BrowserRouter>
//   <Routes>
//     <Route path="/"element={<Home/>}/>
//    <Route path="/contact"element={<Home/>}/>
  
//   </Routes>

// </BrowserRouter>