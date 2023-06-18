import {useNavigate} from "react-router-dom"
import '../App.css'

export default function CreateContact({name,setName,email,setEmail,number,setNumber,arr,setArr,remove,setRemove,editText,setEditText}){
  const navigate=useNavigate()

  
  
  function save(){
    if(name==""&&email==""&&number==""){
      alert("Please Pass all the Info")
    }else{
    let obj={
      name:name,
      email:email,
      number:number,
    }
    setArr([...arr,obj])
    setName("")
    setEmail("")
    setNumber("")
    navigate("/")
  }
  }
  
  return(
    <>
      <div style={{display:'flex', alignItems:'center',justifyContent:'space-around',flexDirection:'column',flexWrap:'wrap',margin:'auto'}}>

        {console.log(name,email,number,arr)}
      <div className="contactContainer">
      <center>
    <h1 style={{fontFamily:'algerian',color:'goldenrod',textDecoration:'underline'}}>Contact Page</h1><br/>
        <div>
          <label>Name</label><br/>
        <input type="text" placeholder="Add Name"onChange={(e)=>setName(e.target.value) }/>
        </div><br/>
        <div>
          <label>Email</label><br/>
        <input type="email" placeholder="Add Email"onChange={(e)=>setEmail(e.target.value)}/>
        </div><br/>
        <div>
          <label>Number</label><br/>
        <input type="number" placeholder="Add Number"onChange={(e)=>setNumber(e.target.value)}/>
        </div><br/>
        <button onClick={()=>save()}>Save</button>
      </center>
        </div>
        </div>
    </>
  )
}