import './PostExceprt.css'
import ReactMarkdown from 'react-markdown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Post from '../BlogPost/BlogPost';
import { BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";


function PostExceprt (props)  {
 // 	console.log("PostExceprt", props.data);
  const navigate = useNavigate();
  let id = props.data.id;
	let content = props.data.content;
	let topic = props.data.topic;
	let exceprt = props.data.exceprt;
  let coverImage = "data:image/png;base64, " + props.data.coverImage;
	let createdDate =  props.data.createdDate;
  return (
		<div className="card">
		 <div className="card__image" style={{background: '#00b2d6 url(' + '"'+ coverImage + '"' + ')'}} >
    ...  
    </div>
		 <div className="card__content">
			<div className="card__topic">
				{topic}
			</div>
		  
      <div className="card__date">
        <CalendarMonthIcon /> {createdDate}
      </div>
      <br />
			<p className="card__text">
				{exceprt}...
			</p>
           
        <button className="card__btn" onClick={() => {navigate("/blog/post:" +id)}}>Read more</button>
       
      </div>
		</div>

)}

export default PostExceprt;
