import Image from 'next/image'
import { socialIcon } from '../data/socialIcons'


const TeamMember = ({name,role,src}) => {
    return (
        <div className="team-member">
            <div className="team-info">

            <div className="team-member-content">
            <div className="team-member_imgContainer">
                <div style={{position: "relative", width:"200px", height:"200px"}}> 
                    <Image src={src} alt={name} layout="fill" objectFit="cover" />
                </div>
                <div className="externals-icon">
                    <i class="fas fa-external-link-alt"></i>
                </div>
            </div>
            <div className="team-description">
                <p className="role">{role}</p>
                <h5 className="member-name">{name}</h5>
                <div className="social-icon">
                    {socialIcon.map((icon,index) => (
                        <div className="icon-container" key={index+Math.random()*100}>
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default TeamMember
