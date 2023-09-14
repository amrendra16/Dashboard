export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"user",
        headerName:"user",
        width:232,
        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },

    {
        field:"email",
        headerName:"Email",
        width:232,
    },
    {
        field:"age",
        headerName:"Age",
        width:100,
    },
    {
        field:"staus",
        headerName:"Status",
        width:150,
        renderCell:(params)=>{
            return(

                <div className={`cellWithStatus ${params.row.staus}` }>
                    {params.row.staus}
                    </div>
                )
        }
    }

];


export const userRows =[
    {
        id:1,
        username:"Amrendra",
        img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staus:"active",
        email:"hfdhsoqijwdsodwq@gmail.com",
        age:21,
    },
    {
        id:2,
        username:"Amrendra",
        img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staus:"pending",
        email:"hfdhsoqijwdsodwq@gmail.com",
        age:21,
    },
    {
        id:3,
        username:"Amrendra",
        img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staus:"active",
        email:"hfdhsoqijwdsodwq@gmail.com",
        age:21,
    },
    {
        id:4,
        username:"Amrendra",
        img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staus:"passive",
        email:"hfdhsoqijwdsodwq@gmail.com",
        age:21,
    },
    {
        id:5,
        username:"Amrendra",
        img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staus:"active",
        email:"hfdhsoqijwdsodwq@gmail.com",
        age:21,
    },
    {
        id:6,
        username:"Amrendra",
        img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staus:"active",
        email:"hfdhsoqijwdsodwq@gmail.com",
        age:21,
    },
    {
        id:7,
        username:"Amrendra",
        img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staus:"passive",
        email:"hfdhsoqijwdsodwq@gmail.com",
        age:21,
    },
    {
        id:8,
        username:"Amrendra",
        img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        staus:"active",
        email:"hfdhsoqijwdsodwq@gmail.com",
        age:21,
    },
]