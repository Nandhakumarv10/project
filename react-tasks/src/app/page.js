import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className=" flex flex-col bg-white text-black w-full h-screen">
     <Link href="/MyButton">Button</Link><br />
     <Link href="/Avator">Avator</Link><br />
     <Link href="/RenderingList">RenderingList</Link><br />
     <Link href="/ReuseComp">Reuse Component</Link><br />
     <Link href="/UsingMutipleData">Multiple Data</Link><br />

    </div>
  )
}
