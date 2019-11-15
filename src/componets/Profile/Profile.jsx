import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return <div>
        <div className={s.content}>
            <img src='https://pbs.twimg.com/media/CvdRNI4WgAAb5Zz.jpg:large'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>

}


export default Profile;