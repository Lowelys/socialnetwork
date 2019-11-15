import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return   <div className={s.content}>
        <div>
            <img src='https://pbs.twimg.com/media/CvdRNI4WgAAb5Zz.jpg:large'/>
        </div>
        <div>
            ava + description
        </div>
    <MyPosts/>
    </div>

}


export default Profile;