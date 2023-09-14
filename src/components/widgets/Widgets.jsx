import "./widgets.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';



const Widgets = ({type}) => {


    let data;

    // temprory
    const amount=100;
    const diff=20;


    switch(type){
        case"user":
        data={
            title:"USERS",
            isMoney:false,
            link:"see all users",
            icon:<PersonOutlineOutlinedIcon className="icon"  
            style={{color:"crimson",backgroundColor:"pink"}}/>
        };
        break;


        case"order":
        data={
            title:"ORDERS",
            isMoney:false,
            link:"View all orders",
            icon:<AddShoppingCartOutlinedIcon className="icon"
            style={{color:"yellow",backgroundColor:"green"}}/>
        };
        break;


        case"earning":
        data={
            title:"EARNINGS",
            isMoney:true,
            link:"View net earning",
            icon:<AutoAwesomeMosaicOutlinedIcon className="icon"
            style={{color:"yellow",backgroundColor:"green"}}/>
           
        };
        break;


        case"balance":
        data={
            title:"BALANCE",
            isMoney:true,
            link:"see details",
            icon:<AccountBalanceOutlinedIcon className="icon"
            style={{color:"yellow",backgroundColor:"green"}}/>
        };
        break;
        default:
            break;
    }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
        <KeyboardArrowUpOutlinedIcon/>
          {diff}%
        </div>
      {data.icon}
      </div>
    </div>
  )
}

export default Widgets
