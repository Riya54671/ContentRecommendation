import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Component from './Component';

export default function Profile() {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[favourite, setFavourite] = useState([]);
  
    useEffect(() => {
  const token = localStorage.getItem("token");
  axios.get("http://localhost:8080/api/profile", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => {
    setUsername(res.data.username);
    setEmail(res.data.email);
  })
  .catch(err => {
    console.error("Profile fetch error:", err);
  });

  axios.get("http://localhost:8080/api/favouriteList", {
    headers: {  
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => {
    setFavourite(res.data);
  })
  .catch(err => {
    console.error("Favourite fetch error:", err);
  });
}, []);

    return(
        <div className="relative bg-[#1B1B1B] w-screen min-h-screen overflow-hidden">
            <div className="flex flex-row justify-start items-center gap-10 ml-10 mt-5">
           <div className=" flex flex-col justify-between">
            <p className="text-white text-[24px] font-['Nunito_Sans'] font-normal tracking-wide">Username</p>
            <p className="w-[400px] h-[40px] rounded-xl border-white border-2 text-white text-[24px] font-['Nunito_Sans'] font-normal pl-2 ">{username}</p>
            </div> 
            <div className=" flex flex-col justify-between">
            <p className="text-white text-[24px] font-['Nunito_Sans'] font-normal tracking-wide">Email</p>
            <p className="w-[400px] h-[40px] rounded-xl border-white border-2 text-white text-[24px] font-['Nunito_Sans'] font-normal pl-2">{email}</p>
            </div>
            </div>
            <h2 className="absolute mt-[40px] left-10 text-white text-[48px] font-['Nunito Sans'] font-bold">Favourites</h2>  
            <div className="flex flex-row gap-5 w-[90vw] ml-10 mt-[120px] overflow-x-auto">
             {favourite.map((fav, index) => (
              <Component 
                key={`fav-${index}`} 
                link={fav.link} 
                title={fav.title} 
                imageurl={fav.imageurl} 
                platform={fav.platform} 
                contentid={fav.contentid}
              />
             ))}
              </div> 
            
        </div>
    );
}