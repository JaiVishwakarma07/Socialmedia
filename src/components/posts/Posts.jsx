import React from 'react';
import Post from '../post/Post';
import "./posts.scss"
const Posts = () => {
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://www.koimoi.com/wp-content/new-galleries/2021/08/mrunal-thakurs-first-look-in-dulquer-salmaans-next-revealed-001.jpg",
        },
        {
            id: 2,
            name: "Jane Doe",
            userId: 2,
            profilePic:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        },
    ];
    return (
        <div className='posts'>
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts;