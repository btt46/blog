import './PostList.css'
import api from '../api'
import React, {useState, useEffect} from "react";
import PostExceprt from '../PostExceprt/PostExceprt';

function PostList () {
  const [blogPosts, setBlogPosts] = useState(''); 
  const fetchdata = async () => {
	const res = await api.get('get_posts/',);
	setBlogPosts(res.data.data)
  }
   
  useEffect(() => {
	fetchdata();
 }, [])
  
  let postList = []; //Store the blog posts's data from api
  
  for (var i = 0; i < blogPosts.length; i++) {
	console.log(i, blogPosts[i])
	let topic = blogPosts[i].topic;
	let content = blogPosts[i].content;
	let exceprt = blogPosts[i].exceprt;
  let coverImage = blogPosts[i].coverImage;
  console.log(coverImage)
  postList.push(<PostExceprt data={{"topic": topic, 
	   "content": content, "exceprt": exceprt, "coverImage" : coverImage,}} className="post-exceprt" />)
	
 }

  return (
	<div className='blog-post'>	
		<ul className='cards'> 
			<li className="cards__item">
				{postList}
		  </li>
 		</ul>
	</div>
			
		
)}

export default PostList;
