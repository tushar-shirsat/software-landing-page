import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Image from 'next/image'


const Blog_card = ({title,src}) => {
    return (
        <div className="blog_card">
            <div className="blog_card-image">
                <Image layout="fill" className="blog_card-image-src" src={src} alt="blog_post" />
                <a href="#">PHOTO</a>
            </div>
            <div className="blog_card-desc">
                <div className="blog_card-meta">
                    <ul className="blog_card-list-line">
                        <li>
                            <CalendarTodayIcon className="blog_card-icon" />
                            23 Jan, 2019
                        </li>
                        <li>
                            <PersonOutlineIcon className="blog_card-icon" />
                            By ThemeHt
                        </li>
                    </ul>
                </div>
                <h4 className="blog_card-title">{title}</h4>
            </div>
        </div>
    )
}

export default Blog_card
