import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function CurrentTime() {
const [time,setTime] = useState(new Date());

  useEffect(()=>{
    console.log("Interval has started.");
    const intervalId = setInterval(()=>{
      setTime(new Date());
    }, 1000);

    return ()=>{
      clearInterval(intervalId);
      console.log("Interval is Cancelled")
    }
  },[])
return (
    <p className='lead'>
      This is the current time: {time.toLocaleDateString()} - {" "}
      {time.toLocaleTimeString()}
    </p>
  )
}

export default CurrentTime
