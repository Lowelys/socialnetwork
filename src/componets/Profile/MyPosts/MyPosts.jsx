import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'My first post', likeCount: 23},
        {id: 3, message: 'My first post', likeCount: 23},
        {id: 4, message: 'My first post', likeCount: 23},
        {id: 5, message: 'My first post', likeCount: 23},
        {id: 6, message: 'My first post', likeCount: 23},
    ]
    let postsElement = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}

            </div>
        </div>
    )
}

export default MyPosts;