import './Profile.css';
import avatar from './avatar.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Profile () {
    return (
        <div className="profile">   
            <div class="profile-left">
                <div class="avatar">
                    <img src={avatar} width="150" height="150"></img>
                </div>
            </div>

            <div class="profile-right">
                <h4>Hi, I am Thanh</h4>
                <p>I'm from Vietnam, and currently pursuing a master's degree in Computer Science at 
                    Toyohashi University of Technology. I enjoy driving, photography, Machine Learning 
                    and software development. I'm responsible for everything on this site.
                </p>
                <p>
                    This is BTT's Blog where I share my experiences in software development and machine learning.   
                </p>
                <div>
                    <a href="https://mui.com/material-ui/material-icons/?query=twitter&selected=Twitter">
                        <TwitterIcon fontSize='large' color="disabled"></TwitterIcon>
                    </a>
                    <a href="https://github.com/btt46">
                        <GitHubIcon fontSize='large' color="disabled"></GitHubIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/thanh-bui-9443871a1/">
                        <LinkedInIcon fontSize='large' color="disabled"></LinkedInIcon>
                    </a>
                  
                </div>
            </div>
        </div>
    )
}

export default Profile;