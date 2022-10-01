import {useEffect, useState} from "react";
import './BlogCard.css';
import Loading from './Loading';


const jsonlink = `https://jsonlink.io/api/extract?url=`;

const BlogCard = (props) => {
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(jsonlink + props.url)
        .then((res) => res.json())
        .then((res) => {
            setData(res);
            setIsLoaded(true);
        });
    }, [props]);

    return isLoaded ? (
        <div className="blog-card">
        <div className="blog-card__image">
            <img src={data.images.length > 0 ? data.images : `https://via.placeholder.com/2000x2000.png?text=Arth+Tweetfolio`} alt="blog" />
        </div>
        <div className="blog-card__content">
            <h3 className="blog-card__title">{data.title}</h3>
            <p className="blog-card__description">{data.description}</p>
            <a className="blog-card__link" href={data.url}>
            Read More
            </a>
        </div>
        </div>
    ) : (
        <Loading type="spinningBubbles" color="white"/>
    );

}

export default BlogCard;