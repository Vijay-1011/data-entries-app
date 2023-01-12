import React,{ useState} from "react";

function App() {
  
  const[object,setObject]= useState({
    name:"",
    description:""   
  });
 const[date,setDate]=useState(new Date().toISOString().slice(0,10));
  const[details,setDetails]= useState([]);
  const [show,setShow]=useState(false);
  const[editIndex,setEditindex]=useState();
  const[nError,setnError]=useState(false);
  const[dError,setdError]=useState(false);
  const[ndError,setndError]=useState(false);
  const[add,setAdd]=useState(false)
  
  function handleChange(event){
const{name,value}=event.target;

setObject(prevVal=>{
  return{
    ...prevVal,
    [name]:value
  }
});
      
  } function handleDate(){
    setDate( new Date().toISOString().slice(0,10));
  
  }

  function handleSubmit(e){
    if((object.name&&object.description)!==""){
      e.preventDefault();  
      const data = { ...object, date }
      for (let i = 0; i < details.length; i++) {

        if (details[i].name === data.name && details[i].description === data.description) {
       
          setndError(true);
          setObject({
            name: "",
            description: ""
          });
          return false
        }
        else if(details[i].name === data.name){
  
          setnError(true);
          setObject({
            name: "",
            description:data.description
          });
          return false
        }
        else if(details[i].description === data.description){
       
          setdError(true);
          

          setObject({
            name: data.name,
            description: ""
          });
          return false
        }      
      }
      setAdd(true)
      setnError(false)
      setdError(false)
      setndError(false)
      setDetails(newDetails => [...newDetails, data])
      setObject({
        name: "",
        description: ""
      });
    }   
    }

  function handleDelete(i){
    details.splice(i,1);
    setDetails([...details]);

  }
  function handleEdit(i){
    setObject(details[i])
    setDate(details[i].date)
    setShow(true);
    setEditindex(i)
  }
  function handleUpdate(e){
    e.preventDefault();
   
    if((object.name&&object.description&&date)!==""){
    const data = { ...object, date }
      for (let i = 0; i < details.length; i++) {
        if (details[i].name === data.name && details[i].description === data.description) {
          setndError(true)
          setObject({
            name: "",
            description: ""
          });
          
          return false
        }
        else if(details[i].name === data.name){
          setnError(true)
          setObject({
            name: "",
            description:data.description
          });
         
          return false
        }
        else if(details[i].description === data.description){
          setdError(true)
          setObject({
            name: data.name,
            description: ""
          });
      
          return false
        }     
      }
      setnError(false)
      setdError(false)
      setndError(false)
      details.splice(editIndex,1,data);
    setDetails([...details]) 
    setShow(false)
    setObject({
      name:"",
      description:"",

      });
    
  }
}
  
  return (
    <>
      <form >
       
        <input name="name" placeholder="Name" onChange={handleChange} value={object.name} required/>

        {nError?<span>Name already exist</span>:null}

        <br></br>
        
        <input name="description" placeholder="Description" onChange={handleChange} value={object.description} required/>

        {dError?<span>Description already exist</span>:null}

        <br></br>
       
        <input name="date"  placeholder="Date" onChange={handleDate} value={date} ></input>

        {ndError?<span>Both Name and Description are already exist</span>:null}

        <br></br>

        {!show?<button onClick={handleSubmit}>Add</button>:

        <button onClick={handleUpdate}>Update</button>}

      </form>

      <br></br>

{add?(<table>
       <thead>
          <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          </tr>
        </thead>
        <tbody>
      {details.map((detail,i)=>(   
           <tr key={i}>
          <td className="details">{detail.name}</td>
          <td className="details">{detail.description}</td>
          <td className="details">{detail.date}</td>
          <td className="bu"><button className="edit" onClick={()=>handleEdit(i)}>Edit</button></td>
          <td className="bu"><button className="delete" onClick={()=>handleDelete(i)}>Delete</button></td>
          </tr>)   
      )                
}
        </tbody>
      </table>):null}
      
    </>
  );
}

export default App;
