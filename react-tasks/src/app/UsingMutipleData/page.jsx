"use client"
import React, { useState } from 'react'

function button() {

const [count,setCount]=useState(0);
const [count2,setCount2]=useState(0);
 function IncreaseCount(){
    setCount(count + 1)
 }

 function Increase(){
  setCount2(count2 +2)
 }
  return (<>
  <div className='flex flex-col gap-3 w-full h-screen justify-center items-center'>
    <h1>Click a button Increase of count values</h1>
    <button className=" border p-2 bg-black text-white "onClick={IncreaseCount}> CLick this:{count}</button>
    <button className='border p-2 bg-black text-white' onClick={Increase}> CLick this:{count2}</button>
    </div>
    </>
  )
}

export default button