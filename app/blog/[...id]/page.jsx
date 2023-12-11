"use client"
import { useParams } from "next/navigation";
const blogDetailsPage = () => {
   const {id}=useParams()
   
    return (
        <div>
           {
            id.map((idName,i)=>(
              <li key={i}>{idName}</li>
            ))
           }
        </div>
    );
};

export default blogDetailsPage;