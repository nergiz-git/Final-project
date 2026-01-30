import React from 'react'
import Navbar from '../../user/layout/navbar'
import { Outlet } from 'react-router'
import AdminNavbar from './adminNavbar'

function AdminLayout() {
  return (
    <>
      <AdminNavbar/>
      <Outlet/>
    </>
  )
}

export default AdminLayout
