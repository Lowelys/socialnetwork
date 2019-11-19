import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src='https://i.ytimg.com/vi/-kG_-dl99qg/maxresdefault.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )

}


export default ProfileInfo;