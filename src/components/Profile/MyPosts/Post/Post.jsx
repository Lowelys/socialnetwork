import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://www.e-olymp.com/uploads/users/5a/9f/5a9f967fa2985.jpg'/>
            {props.message}
            <div>
                <span>like </span>
                {props.likeCount}

            </div>
        </div>

    )
}


export default Post;