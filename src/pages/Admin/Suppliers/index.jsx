import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Index() {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers")
      .then(res => setData(res.data))
  }, [])

  const handleDelete = (idFromMap) => {
    axios.delete(`https://northwind.vercel.app/api/suppliers/${idFromMap}`)
      .then(res => console.log(res))
    setData(data.filter(x=> x.id !== idFromMap))
  }

  const handleView = (id) => {
    navigate(`/admin/suppliers/${id}`)
  }



  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell>Contact Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((sup) => (
            <TableRow
              key={sup.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {sup.companyName}
              </TableCell>
              <TableCell>{sup.contactName}</TableCell>
              <TableCell>{sup.address?.country}</TableCell>
              <TableCell><Button variant="text"  onClick={()=>handleDelete(sup.id)}>Delete</Button></TableCell>
              <TableCell><Button variant="text"  onClick={()=>handleView(sup.id)}>View</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Index