import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://scontent-sjc3-1.cdninstagram.com/vp/69d1058e672302746ecb992975be1765/5DF2B164/t51.2885-19/s320x320/56913521_285101885748335_7930624560506863616_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>

    )
}


export default Post;