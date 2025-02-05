"use client"
import React from "react";

const user = {
    name: 'Hello',
    imageUrl: 'https://i.imgur.com/3PUl7tb.png',
    imageSize: 90,
    description: "Hello every one"
  };


  export default function Avator() {
    return (
      <>
      <div className=" w-full h-screen flex flex-col justify-center items-center">
      <h1>{user.name}</h1>
        <img
          className="avatar rounded-full"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
         
        />
        <h2>{user.description}</h2>
      </div>
       
      </>
    );
  }
  