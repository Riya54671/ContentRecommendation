import React, {useState} from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


export default function Component({link, title, imageurl, platform, contentid}) {

  const[isFavourite, setIsFavourite] = useState(false);

  const handleClick = ()=> {
    setIsFavourite(!isFavourite);

    const token = localStorage.getItem("token");
    if (token && contentid && !isFavourite) {
    try {
       axios.post(
        "http://localhost:8080/api/favourite",
        { contentid: contentid },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Added to favourites");
    } catch (error) {
      console.error("Failed to favourite:", error);
    }
  }
  };

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="450" height="400" viewBox="0 0 450 400" fill="none" >
        <path d="M0 64.6896C0 53.6439 8.95431 44.6897 20 44.6897H211.391H366.041C375.765 44.6897 384.079 37.6964 385.745 28.1168L387.753 16.5729C389.419 6.99325 397.734 0 407.457 0H427.903C438.906 0 447.842 8.88719 447.903 19.8896L449.889 379.89C449.95 390.978 440.978 400 429.889 400H20C8.9543 400 0 391.046 0 380V64.6896Z" fill="#6C63FF"/>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <image
          href={imageurl}
          x="-60"
          y="70"
          width="550"
          height="200"
        />
        </a>
       <foreignObject x="30" y="290" width="500" height="120">
  <div
    xmlns="http://www.w3.org/1999/xhtml"
    style={{
      paddingBottom: "20px", 
      width: "80%",
      minHeight: "100%",
      color: "black",
      fontWeight: "bold",
      fontSize: "20px",
      fontFamily: "'Nunito Sans', sans-serif",
      wordWrap: "break-word",
      whiteSpace: "normal",
    }}
  >
    {title}
  </div>
</foreignObject>

<foreignObject x="400" y="10" width="50" height="50">
  <div xmlns="http://www.w3.org/1999/xhtml">
    <button
      onClick={handleClick}
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
    >
      {isFavourite ? (
        <AiFillHeart size={32} color="red" />
      ) : (
        <AiOutlineHeart size={32} />
      )}
    </button>
  </div>
</foreignObject>

 <rect
          x="225"
          y="350"
          width="220"
          height="40"
          rx="20"
          ry="20"
          fill="#fff"
          stroke="#6C63FF"
          strokeWidth="3"
        />
       
        <text
          x="340"
          y="380"
          textAnchor="middle"
          fontSize="24"
          fontFamily="'Nunito Sans', sans-serif"
          fontWeight="bold"
          fill="#000"
        >
          {platform}
        </text>

      </svg>
      
    </div>
    
  );
}