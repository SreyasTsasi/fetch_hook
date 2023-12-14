
import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "./hooks/fetch.hook.js";



function App(){
    
    if(import.meta.env.MODE =="development") {
        axios.defaults.baseURL="http://locahost:3000"
    }
    const [{apiData,status, isLoading, error }] =useFetch("/api/get-data");

    if(isLoading) {
      return(
        <h3>Loading...</h3>
      );
    }
    
if(error) {
  return(
    <h3>
      Error occured
    </h3>
  );
}



    

  return (
    <div>
  <h4>App</h4>
  <p>Message from server: {apiData?.msg}</p>
  


    </div>
  )
}
export default App

