"use client"
import React from 'react'

export default function MyButton() {

  function handleClick(){
    alert("hello");
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
       <button onClick={handleClick}
    className="p-2 bg-white border hover:bg-blue-500 rounded-lg
    "
    >Click me</button>
    </div>
  )
}
