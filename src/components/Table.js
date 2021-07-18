import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
export const Table=()=>{
    //using useState hook to set all the values in data array and initially passing a empty array
    const [data,setData] = useState([])
   //making the columns array for setting their title and field 
    const columns = [
        {title:"ID",field:"id"},
        {title:"Username",field:"username"},
        {title:"Name",field:"name"},
        {title:"Email Id",field:"email"},
        {title:"Website",field:"website"}
    ]
    //using useEffect to fetch all the datas and taking those in data array
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp=>resp.json())
        .then(resp=>{
            setData(resp)
        })

    },[])

    return(
        //using material table from material ui and setting all such data and columns value within it
        <div>
            <MaterialTable title="Material Table"
            data={data}
            columns={columns}
            options={{
                paging:false,
                   exportButton:true
            }}

            />
        </div>
    );
}