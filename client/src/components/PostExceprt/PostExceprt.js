import './PostExceprt.css'
import ReactMarkdown from 'react-markdown';

function PostExceprt (props)  {
	console.log("PostExceprt", props.data);
	let content = props.data.content;
	let topic = props.data.topic;
	let exceprt = props.data.exceprt;
  let coverImage = props.data.coverImage;
  
	return (
		<div className="card">
		 <div className="card__image">
        <img src={"data:image/png;base64, "+ coverImage} />    
    </div>
		 <div className="card__content">
			<div className="card__topic">
				{topic}
			</div>
		  <br />
			<p className="card__text">
				{exceprt}....
			</p>
		  <button className="card__btn">Read more</button>
		 </div>
		</div>

)}

export default PostExceprt;
