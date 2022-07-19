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
  let id = blogPosts[i].id;
  let topic = blogPosts[i].topic;
  let content = blogPosts[i].content;
  let exceprt = blogPosts[i].exceprt;
  let coverImage = blogPosts[i].coverImage;
  let createdDate =  blogPosts[i].createdDate;
  postList.push(<div className="cards__item">
	<PostExceprt data={{"id": id, "topic": topic, 
	   "content": content, "exceprt": exceprt, "coverImage" : coverImage,
     "createdDate": createdDate}} className="post-exceprt" />
	 </div>)	
 }

  return (
	<div className='blog-post'>	
		<div className='cards'>
			{postList}
		</div>
	</div>
			
		
)}

export default PostList;
