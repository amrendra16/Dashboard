
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="nav_item">
        <div className="search">
        <input type="text" placeholder="Search..."  />
        <SearchIcon/>
        </div>
        <div className="items">
          <div className="item ">
            <LanguageIcon className="icon"/>
            English
          </div>
          <div className="item">
          <LanguageIcon className="icon"/>
           
          </div>
           <div className="item">
           <DarkModeIcon className="icon" 
           onClick={()=> dispatch({type:"TOGGLE"})
           } />
           
          </div>
          <div className="item">
          <NotificationsNoneIcon className="icon"/>
          <div className="counter">1</div>
           
          </div>
          <div className="item">
          <MailOutlinedIcon className="icon"/>
          <div className="counter">2</div>
           
          </div>
          <div className="item">
          <LanguageIcon className="icon"/>
           
          </div>


          <div className="item">
         <img src="https://images.pexels.com/photos/14966939/pexels-photo-14966939/free-photo-of-surfer-on-sea-waves.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="" className="img"/>
           
          </div>

        </div>
      </div>
     </div>
  )
}

export default Navbar
