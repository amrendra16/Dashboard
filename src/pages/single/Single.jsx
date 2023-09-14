import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
    <div className="top">
      <div className="left">
        <div className="editButton">Edit</div>
        <div className="title">Information</div>
        <div className="item">
          <img src="https://images.pexels.com/photos/18187424/pexels-photo-18187424/free-photo-of-leaves-over-woman-face.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
          alt="" className="itemImg" />

         <div className="details">
          <h1 className="itemTitle">Tanu</h1>
          <div className="detailsItem">
            <span className="itemKey">Email:</span>
            <span className="ItemValue">tanu2627@gmail.com</span>
          </div>
          <div className="detailsItem">
            <span className="itemKey">Phone:</span>
            <span className="ItemValue">5132085165</span>
          </div>
          <div className="detailsItem">
            <span className="itemKey">Address:</span>
            <span className="ItemValue">adiehdfvhsbxo8qdgym</span>
          </div>
          <div className="detailsItem">
            <span className="itemKey">Country:</span>
            <span className="ItemValue">India</span>
          </div>
         </div>
        </div>
      </div>
      <div className="right">
        <Chart aspect={3 /1} title="User Spending (Last 6 months)"/>
      </div>
      </div>
    <div className="bottom">
    <div className="title">Last Transections</div>

      <List/>
    </div>
      </div>
      
    </div>
  )
}

export default Single
