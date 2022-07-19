import { Routes, Route, useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import api from '../api'
import ReactMarkdown from 'react-markdown'

function BlogPost() {
  let params = useParams();
  let postId = params.id.replace(":", "");
  const [blogPost, setBlogPost] = useState(''); 

  const fetchdata = async () => {
	 const res = await api.get('blogpost/'+postId,);
	  console.log(res)
    setBlogPost(res.data.data)
  }
  useEffect(() => {
    fetchdata();
   }, [])
 
  return (
    <div className="post">
      <ReactMarkdown> 
        {blogPost.content}
      </ReactMarkdown>
     
    </div>
  )

}


export default BlogPost;
