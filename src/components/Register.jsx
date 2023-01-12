import React from "react";
import {useForm} from "react-hook-form";





function Register() {

  

  const{register,handleSubmit}=useForm();

  

  function onSubmit(data){
      console.log(data);
      
    
      
  }
return (<>
  
  <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name")}/>
      <input type="number" placeholder="Date" {...register("date")}/>
      <input type="text" placeholder="Description" {...register("description")}/>
      <input type="submit"/>
  </form>
  <table>
  <th>Date</th>
  <tr></tr>
  <th>Name</th>
  <th>Descrption</th>

  </table>
  </>
)
}

export default Register;

