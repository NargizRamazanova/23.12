import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Index() {
  const [company, setCompany] = useState("")
  const [contact, setContact] = useState("")
  const [country, setCountry] = useState("")
  const navigate = useNavigate();


  const handleCreate = (e) => {
    e.preventDefault()
    const obj= {
      companyName: company,
      contactName: contact,
      address:{
        country: country
      }
    }
    axios.post("https://northwind.vercel.app/api/suppliers", obj)
      .then(res=> console.log(res))
    navigate("/admin/suppliers")
  }


  return (
    <form onSubmit={handleCreate}>
      <TextField
        style={{display: "block"}}
        id="outlined-textarea"
        placeholder="Company Name"
        value={company}
        onChange={(e)=> setCompany(e.target.value)}
      />
      <TextField
        style={{display: "block"}}
        id="outlined-textarea"
        placeholder="Contact Name"
        value={contact}
        onChange={(e)=> setContact(e.target.value)}
      />
      <TextField
        style={{display: "block"}}
        id="outlined-textarea"
        placeholder="Country"
        value={country}
        onChange={(e)=> setCountry(e.target.value)}
      />
      <Button variant="contained" type='submit'>Save</Button>
    </form>
  )
}

export default Index