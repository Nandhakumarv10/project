"use client"
import React, { useState } from 'react'

function button() {

const [count,setCount]=useState(0);
 function IncreaseCount(){
    setCount(count + 1)
 }
  return (
    <button onClick={IncreaseCount}> CLick this:{count}</button>
  )
}

export default button