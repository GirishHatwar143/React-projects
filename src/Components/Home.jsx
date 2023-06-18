import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Home({ arr, setArr }) {
  const [index, setInd] = useState(-1);
  const [state, setState] = useState({
    name: '',
    email: '',
    number: ''
  })

  const navigate = useNavigate();
  const [isEdit, setEdit] = useState(false)

  const handleEdit = (id) => {
    if (isEdit) {
      let x = [...arr]
      x[id] = state
      setArr(x)
      setEdit(false)
    }
  }
  const onhandleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }


  const deleteData = (ind) => {
    let data = [...arr]
    data.splice(ind, 1);
    setArr(data);

  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
        <center>
          <h1 style={{ fontFamily: 'algerian', color: 'forestgreen' }}>Home Page</h1><br />
          <button onClick={() => navigate("/contact")}>Go Contact</button>
          <div className='contactList'>
            <h2>Contact - List</h2>
          </div>
          <div className='mainContainer'>

            {arr && arr.map((item, ind) =>
              <div className="cardContainer">
                <div className="cardBody">
                  {console.log(index)}
                  <h4>Name:- {isEdit && ind == index ? <input defaultValue={item.name} onChange={(e) => onhandleChange(e)} name="name" /> : item.name}</h4><hr />
                  <h4>Email:- {isEdit && ind == index ? <input defaultValue={item.email} name="email" onChange={(e) => onhandleChange(e)} /> : item.email}</h4><hr />
                  <h4>Contact:- {isEdit && ind == index ? <input defaultValue={item.number} name="number" type='number' onChange={(e) => onhandleChange(e)} /> : item.number}</h4><hr />
                </div>
                <div>
                  <span><button onClick={() => deleteData(ind)}>Delete</button></span>
                  <span><button onClick={() => { setEdit(true); handleEdit(ind); setState({ name: item.name, email: item.email, number: item.number }); setInd(ind) }}>{isEdit ? "Save" : "Edit"}</button></span>
                </div>
              </div>
            )}
          </div>
        </center>
      </div>
    </>
  )
}