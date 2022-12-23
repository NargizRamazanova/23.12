import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Index() {
  return (
    <>
        <nav style={{marginBottom: "30px"}}>
            <Link to="add" style={{marginRight: "20px"}}>Add Supplier</Link>
            <Link to="suppliers">Suppliers</Link>n
        </nav>
        <Outlet/>
    </>
  )
}

export default Index