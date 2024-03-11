import { useState } from "react";

const Images = ({list}) => {

    const[score, setScore] = useState(0);
    const [imageSrc, setImageSrc] = useState([]);
    const [total, setTotal] = useState(0);
    
    const handleClick = (e) => {
        const item = e.target.src;
        setImageSrc(item);
        if(imageSrc.includes(item)) {
           setTotal(score);
           setScore(0);
           shuffleArray(list)
        } else {
            shuffleArray(list);
            setScore(score + 1);
        }
    }

    return (
        <div className="img-container">
            <div className="score-container">
                <h2>Total: {total}</h2>
                <h2>Score: {score}</h2>
            </div>
            <div className="img-thumbnail">
                {list.map((images) => (
                        <img
                            key={images.id} 
                            src={images.urls.small} 
                            className="image"
                            alt={images.alt_description}
                            onClick={handleClick}
                            style={{width: '300px', height: '300px'}} />
                ))}
            </div>
        </div>
    )
}

const shuffleArray = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j],  arr[i]];
    }
    return arr
}

export { Images }