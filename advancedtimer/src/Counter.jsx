import React, { useEffect, useRef, useState } from 'react'
import { useReducer } from 'react'

function Counter() {
    const [Time,settime]=useState(0)
    const [isActive,setactive]=useState(false) 
    const [Pause,setpause]=useState(false)
   const referto=useRef()
    function handlestart()
    {
        if(Time<=0) return alert('Enter the time')
        setactive(true)
        setpause(false)
    }
    function handlepause()
    {
            if(!isActive ) return alert('please wait to start')
             setpause((prev)=>!prev)
    }
    function handlereset()
    {
        if(Time==0)  alert('Please wait to start')
         settime(0);
        setactive(false)
        setpause(false)
        console.log(Pause)
          clearInterval(referto)
        return
    }
    useEffect(()=>{
        
        if(isActive && !Pause && Time>0){
          referto.current=setTimeout(() => {
            settime((prev)=>prev-1)
            }, 1000)
            clearTimeout();
    }},[isActive,Time,Pause])
    const handletimer=()=>
    {
        const min =String(Math.floor(Time/60)).padStart(2,'0')
        const sec =String(Math.floor(Time%60)).padStart(2,'0')
        console.log(min,sec)
        return `${min}:${sec}`
    }
  return (
    <div>
        <div className='mainbox'>
            <h2>Timer </h2>
            <input type='number' placeholder='Enter the time'  onChange={(e)=>settime(parseInt(e.target.value)*60)}/>
              <h4>{handletimer()}</h4><br/>
              <button onClick={handlestart}>Start</button>
              
              <button onClick={handlepause}>{Pause?'Resume':"Pause"}</button>
        
              <button onClick={handlereset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter
