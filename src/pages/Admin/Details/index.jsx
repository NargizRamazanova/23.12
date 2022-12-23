import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Button from '@mui/material/Button';


function Index() {

    const [supplier, setSupplier] = useState({})
    let { supId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/suppliers/${supId}`)
            .then(res => setSupplier(res.data))
    }, [])

    return (
        <>
            <div>{supplier.companyName}</div>
            <div>{supplier.address?.city}</div>
            <div>{supplier.contactName}</div>
            <div>{supplier.address?.phone}</div>
            <div>{supplier.contactTitle}</div>
            <Button variant="text" onClick={()=> navigate(-1)}>Back</Button>

        </>

    )
}

export default Index