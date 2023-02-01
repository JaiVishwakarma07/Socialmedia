import React, { useContext } from 'react';
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
const Stories = () => {
    const { currentUser } = useContext(AuthContext);
    //temp 
    const stories = [
        {
            id: 1,
            name: "Dish Patani",
            img: "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2022/07/disha-patani-bikini-hot-1659075024.jpg",
        },
        {
            id: 2,
            name: "Dish Patani",
            img: "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2022/07/disha-patani-bikini-hot-1659075024.jpg",
        },
        {
            id: 3,
            name: "Dish Patani",
            img: "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2022/07/disha-patani-bikini-hot-1659075024.jpg",
        },
        {
            id: 4,
            name: "Dish Patani",
            img: "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2022/07/disha-patani-bikini-hot-1659075024.jpg",
        },
    ];
    return (
        <div className='Stories'>
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories;