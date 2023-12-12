'use client'
import React, { useState } from 'react';
import style from '../deshbord/deshbord.css'
const AdminPanel = () => {
    const [count,setCount]=useState(0)

    const handleCountInc=()=>{
        setCount(count+1)
    }
    
    const handleCountDec=()=>{
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
       
    }
    return (
        <div>
            <p>admin panel</p>
            <h1>{count}</h1>
            <button className='bg-black text-white mr-8' onClick={handleCountInc}>inc</button>
            <button className='bg-blue-500 text-red-600' onClick={handleCountDec}>dec</button>
        </div>
    );
};

export default AdminPanel;