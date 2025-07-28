import React from 'react'
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {
   const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  }
 
  function handleFormData(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8080/api/login" , {
      username: formData.username,   
    password: formData.password
    })
      .then((resp) => {
      const token = resp.data.token;
      if (token) {
      localStorage.setItem("token", resp.data.token);
        console.log("Token stored:", token);
        navigate('/dashboard');
      } else {
        console.error("Token not received in response");
      }
    })
       .catch((error) => {
        console.log(error);
      });
    
  };
    return(
        <div className="relative bg-[#1B1B1B] w-screen min-h-screen overflow-hidden">
             <svg className="absolute -top-10 left-0" xmlns="http://www.w3.org/2000/svg" width="354" height="351" viewBox="0 0 354 351" fill="none">
  <path d="M348.641 51.8751C355.728 60.3474 354.605 72.9608 346.133 80.048L214.429 190.219L108.019 279.232C100.576 285.457 98.6762 296.127 103.511 304.539L106.975 310.565C111.81 318.977 109.91 329.646 102.468 335.872L90.8302 345.606C82.3914 352.665 69.8358 351.583 62.7295 343.184L-142.009 101.199C-149.172 92.733 -148.079 80.0555 -139.573 72.9403L142.682 -163.168C151.155 -170.255 163.768 -169.132 170.855 -160.66L348.641 51.8751Z" fill="#6C63FF"/>
</svg> 
<svg className="absolute right-0 -top-10"  xmlns="http://www.w3.org/2000/svg" width="409" height="351" viewBox="0 0 409 351" fill="none">
  <path d="M319.561 344.368C311.677 352.104 299.014 351.984 291.278 344.099L171.02 221.535L73.8587 122.511C67.0632 115.585 56.2769 114.536 48.2741 120.022L42.5414 123.952C34.5386 129.438 23.7524 128.389 16.9569 121.463L6.331 110.634C-1.37432 102.781 -1.28996 90.1787 6.51978 82.4295L231.527 -140.834C239.399 -148.645 252.123 -148.56 259.89 -140.644L517.614 122.022C525.35 129.906 525.229 142.569 517.345 150.305L319.561 344.368Z" fill="#FFD483"/>
</svg>
<svg className="absolute left-0 -bottom-15" xmlns="http://www.w3.org/2000/svg" width="427" height="316" viewBox="0 0 427 316" fill="none">
  <path d="M34.5842 13.1901C38.8229 2.99 50.5278 -1.84267 60.7278 2.396L219.291 68.2874L347.4 121.524C356.36 125.247 366.7 122.002 371.926 113.827L375.67 107.971C380.896 99.7959 391.236 96.551 400.196 100.274L414.206 106.097C424.366 110.318 429.208 121.953 425.043 132.136L305.049 425.524C300.851 435.788 289.104 440.677 278.863 436.422L-60.9523 295.21C-71.1524 290.971 -75.985 279.267 -71.7463 269.067L34.5842 13.1901Z" fill="#F96666"/>
</svg>
<svg className="absolute right-0 -bottom-15" xmlns="http://www.w3.org/2000/svg" width="401" height="358" viewBox="0 0 401 358" fill="none">
  <path d="M2.2872 232.267C-2.74609 222.435 1.14423 210.384 10.9765 205.35L163.822 127.106L287.312 63.8897C295.949 59.4683 300.167 49.4855 297.316 40.2109L295.274 33.5672C292.423 24.2926 296.641 14.3097 305.278 9.88835L318.783 2.97475C328.577 -2.03861 340.58 1.79933 345.648 11.5644L491.668 292.906C496.777 302.749 492.901 314.869 483.03 319.922L155.468 487.606C145.636 492.64 133.585 488.749 128.551 478.917L2.2872 232.267Z" fill="#56CCF2"/>
</svg>
<h1 className="absolute top-[4rem] left-[42rem] text-white text-[48px] font-[Nunito Sans] font-bold tracking-wide">LOGIN</h1>
<p className="absolute top-[7rem] left-[25rem] italic text-white text-[32px] font-[Nunito Sans] font-light tracking-normal">Hello again! Let’s dive back into the content you love</p>
<form className="absolute top-[12rem] left-[27rem] flex flex-col gap-5" onSubmit={handleSubmit}>
  <input className="w-[40rem] h-[5rem] rounded-4xl border-white border-3 text-white text-[32px] font-[Nunito Sans] font-normal px-5 "  type="text" name="username" placeholder='Enter your Username' onChange={handleFormData}></input>
  <input className="w-[40rem] h-[5rem] rounded-4xl border-white border-3 text-white text-[32px] font-[Nunito Sans] font-normal px-5" type="password" name="password" placeholder="Enter your password" onChange={handleFormData}></input>
  <button 
  className="absolute left-[15rem] top-[13rem] w-[10rem] h-[3rem] text-white text-[48px] font-['Nunito_Sans'] font-bold"
   style={{ backgroundColor: "#6C63FF" }} 
  type="submit"
>
  LOGIN
</button>
</form>

<div className="absolute top-[30rem] left-[35rem] ">
  <span className="text-white text-[24px] font-[Nunito Sans] font-bold tracking-wide ">Do not have an account </span> <span className="text-[#6C63FF] text-[24px] font-[Nunito Sans] font-bold" onClick={handleClick}>SignUp</span>
</div>

        </div>
    );
}