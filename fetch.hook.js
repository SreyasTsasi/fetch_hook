import axios from "axios";
import { useEffect,useState } from "react";


function useFetch(url) {
    const [data,setData] =useState({
        apiData: null,
        error: null,
        status: null,
        isLoading: false
    })

useEffect(()=> {
   setData(prev => ({...prev, isLoading:true}));
   axios.get(url)
   .then(res =>{
    setData(prev => ({...prev,apiData:res.data,status: res.status}));
        
   })

   .catch(error => {
    setData(prev => ({...prev, error}))
   } )

.finally(() => {
    setData(prev => ({...prev, isLoading:false}));
}
)
},[url]);

return[data];


}

export default useFetch;