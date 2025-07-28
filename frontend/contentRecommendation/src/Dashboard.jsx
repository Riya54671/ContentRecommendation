import React from 'react';
import Component from './Component';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const[category, setCategory] = useState([]);
    const[courses, setCourses] = useState([]);
    const[videos, setVideos] = useState([]);
    const[articles, setArticles] = useState([]);

     useEffect(() => {
    axios.get("http://localhost:8080/api/categories")
      .then(response => {
        setCategory(response.data); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

    axios.get("http://localhost:8080/api/content/article")
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => { 
        console.error("Error fetching courses:", error);
      });

    axios.get("http://localhost:8080/api/content/video")
      .then(response => {     
        setVideos(response.data);
      })
      .catch(error => { 
        console.error("Error fetching videos:", error);
      });

    axios.get("http://localhost:8080/api/content/course")
      .then(response => {   
        setCourses(response.data);
      })
      .catch(error => { 
        console.error("Error fetching articles:", error);
      });
  }, []);

  function categoryClick(cat){
    const categoryName = cat.category; 
   // Articles
  axios.get(`http://localhost:8080/api/contentlist/${categoryName}/article`)
    .then(response => setArticles(response.data))
    .catch(error => console.error("Error fetching articles:", error));

     // Videos
  axios.get(`http://localhost:8080/api/contentlist/${categoryName}/video`)
    .then(response => setVideos(response.data))
    .catch(error => console.error("Error fetching videos:", error));


   // Courses
  axios.get(`http://localhost:8080/api/contentlist/${categoryName}/course`)
    .then(response => setCourses(response.data))
    .catch(error => console.error("Error fetching courses:", error));

  }

  function Search(term){
    // Articles
  axios.get(`http://localhost:8080/api/search?keyword=${term}&type=article`)
    .then(response => setArticles(response.data))
    .catch(error => console.error("Error fetching articles:", error));

     // Videos
  axios.get(`http://localhost:8080/api/search?keyword=${term}&type=video`)
    .then(response => setVideos(response.data))
    .catch(error => console.error("Error fetching videos:", error));


   // Courses
  axios.get(`http://localhost:8080/api/search?keyword=${term}&type=course`)
    .then(response => setCourses(response.data))
    .catch(error => console.error("Error fetching courses:", error));
  }

   
    return (
        <div className="relative bg-[#1B1B1B] w-screen min-h-screen overflow-auto">
            <div className="absolute top-3 left-80 w-[800px] h-[70px] rounded-4xl border-white border-4 " >
                <svg className="absolute left-3 top-1" xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
  <path d="M22.0833 4.41675C19.3198 4.41823 16.5951 5.06802 14.1283 6.3139C11.6614 7.55979 9.52133 9.36701 7.8799 11.5903C6.23848 13.8136 5.14153 16.391 4.67723 19.1153C4.21293 21.8396 4.39423 24.6348 5.20656 27.2763C6.01888 29.9178 7.43957 32.3319 9.35444 34.3246C11.2693 36.3172 13.625 37.8328 16.232 38.7496C18.8391 39.6664 21.6249 39.9588 24.3655 39.6033C27.1062 39.2478 29.7251 38.2542 32.012 36.7026L42.93 47.6117C43.2333 47.9372 43.599 48.1982 44.0053 48.3793C44.4116 48.5603 44.8503 48.6577 45.295 48.6655C45.7398 48.6734 46.1816 48.5916 46.5941 48.425C47.0065 48.2584 47.3812 48.0104 47.6958 47.6958C48.0103 47.3813 48.2583 47.0066 48.4249 46.5941C48.5915 46.1817 48.6733 45.7399 48.6655 45.2951C48.6576 44.8503 48.5603 44.4117 48.3792 44.0054C48.1982 43.599 47.9371 43.2333 47.6117 42.9301L36.7025 32.0121C38.5073 29.3558 39.554 26.2578 39.7299 23.0513C39.9058 19.8447 39.2044 16.6508 37.701 13.813C36.1977 10.9753 33.9492 8.60094 31.1975 6.94536C28.4457 5.28979 25.2947 4.41558 22.0833 4.41675ZM11.0417 22.0834C11.0417 19.155 12.205 16.3465 14.2757 14.2758C16.3464 12.2051 19.1549 11.0417 22.0833 11.0417C25.0118 11.0417 27.8203 12.2051 29.891 14.2758C31.9617 16.3465 33.125 19.155 33.125 22.0834C33.125 25.0119 31.9617 27.8203 29.891 29.8911C27.8203 31.9618 25.0118 33.1251 22.0833 33.1251C19.1549 33.1251 16.3464 31.9618 14.2757 29.8911C12.205 27.8203 11.0417 25.0119 11.0417 22.0834Z" fill="white"/>
</svg>
      <input
        className="flex-1 h-full bg-transparent outline-none text-white text-xl ml-20"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            Search(query);
          }
        }}
        placeholder="Search..."
      />
            </div>
            <div className="absolute right-10 top-2" onClick={() => navigate('/profile')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M40 6.66675C44.3774 6.66673 48.712 7.5289 52.7562 9.20405C56.8004 10.8792 60.475 13.3345 63.5703 16.4298C66.6656 19.5251 69.1209 23.1997 70.7961 27.2439C72.4713 31.2881 73.3335 35.6226 73.3335 40C73.3335 58.4096 58.4096 73.3335 40 73.3335C21.5907 73.3335 6.66675 58.4096 6.66675 40C6.66675 21.5907 21.5907 6.66675 40 6.66675ZM43.3335 43.3335H36.6667C28.4144 43.3335 21.3296 48.3314 18.2738 55.466C23.1088 62.2458 31.0382 66.6667 40 66.6667C48.9619 66.6667 56.8913 62.2458 61.7264 55.4655C58.6707 48.3314 51.5858 43.3335 43.3335 43.3335ZM40 16.6667C34.4772 16.6667 30 21.1439 30 26.6668C30 32.1896 34.4772 36.6668 40 36.6668C45.5228 36.6668 50 32.1896 50 26.6668C50 21.1439 45.523 16.6667 40 16.6667Z" fill="white"/>
</svg>
</div>
{/*Categoory List*/}
<div className="absolute flex flex-row right-45 gap-10 top-28 " >
  {category.map((cat) => (
  <button  key={cat.category} className="h-[52px] w-fit border-1 rounded-2xl whitespace-nowrap text-white text-[24px] font-['Nunito_Sans'] tracking-wide font-bold p-2 pb-2 "  style={{
    background: "linear-gradient(94deg, rgba(255, 255, 255, 0.40) 1.16%, rgba(255, 255, 255, 0.10) 98.84%)"
  }} onClick = {() => categoryClick(cat)} >
   {cat.category}
  </button>
    ))}
</div>   
<h2 className="absolute mt-[160px] left-10 text-white text-[48px] font-['Nunito Sans'] font-bold">Articles</h2>  
<div className="flex flex-row gap-5 w-[90vw] ml-10 mt-[220px] overflow-x-auto">
 {articles.map((article, index) => (
  <Component 
    key={`article-${index}`} 
    link={article.link} 
    title={article.title} 
    imageurl={article.imageurl} 
    platform={article.platform} 
    contentid={article.contentid}
  />
 ))}
  </div> 
<h2 className="absolute mt-[10px] left-10 text-white text-[48px] font-['Nunito Sans'] font-bold">Videos</h2>   
<div className="flex flex-row gap-5 w-[90vw] ml-10 mt-[80px] overflow-x-auto">
 {videos.map((video, index) => (
  <Component 
    key={`video-${index}`}
    link={video.link} 
    title={video.title} 
    imageurl={video.imageurl} 
    platform={video.platform} 
    contentid={video.contentid}
  />
 ))}
  </div> 
<h2 className="absolute mt-[20px] left-10 text-white text-[48px] font-['Nunito Sans'] font-bold">Courses</h2>
<div className="flex flex-row gap-5 w-[90vw] ml-10 mt-[80px] overflow-x-auto">
 {courses.map((course, index) => (   
  <Component 
    key={`course-${index}`}
    link={course.link} 
    title={course.title}
    imageurl={course.imageurl}
    platform={course.platform}
    contentid={course.contentid}
  />
 ))}  
 </div>
        </div>
      
    );
}