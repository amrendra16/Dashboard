import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';



const Sidebar = () => {

   
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">
            Amrendra
        </span>
        </Link>

        </div>


      <hr/>

      <div className="center">
        <ul>
            <p className='title'>MAIN</p>
            <Link to="/" style={{textDecoration:"none"}}>

        <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
        </li>
            </Link>
        
        



        <p className='title'>LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>
        <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span>Users</span>
        </li>
        </Link>

        <Link to="/users" style={{textDecoration:"none"}}>
        <li> 
            <ProductionQuantityLimitsOutlinedIcon className='icon'/>
            <span>Products</span>
        </li>
        </Link>
        <li>
            <FilterFramesIcon className='icon'/>
            <span>Orders</span>
        </li>
        <li>
            <RoomServiceOutlinedIcon className='icon'/>
            <span>Delivery</span>
        </li>
        <p className='title'>USEFUL</p>

         <li>

            <ApartmentOutlinedIcon className='icon'/>
            <span>Stats</span>
        </li> <li>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <span>Notifications</span>
        </li> 
        <p className='title'>SERVICE</p>
        
        <li>
        <LocalHospitalOutlinedIcon className='icon'/>
            <span>System Helth</span>
        </li> <li>
            <InputOutlinedIcon className='icon'/>
            <span>Logs</span>
        </li> <li>
            <SettingsApplicationsOutlinedIcon className='icon'/>
            <span>Settings</span>
        </li>
        
        <p className='title'>USER</p>
        
         <li>
            <AssignmentIndOutlinedIcon className='icon'/>
            <span>Profile</span>
        </li> <li>
                <LockOutlinedIcon className='icon'/>
            <span>Logout</span>
        </li> 

        </ul>
        </div>
     
    </div>
  )
}

export default Sidebar
