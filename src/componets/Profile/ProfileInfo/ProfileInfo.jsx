import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://pbs.twimg.com/media/CvdRNI4WgAAb5Zz.jpg:large'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )

}


export default ProfileInfo;