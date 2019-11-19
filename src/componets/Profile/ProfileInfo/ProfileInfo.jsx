import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src='https://c.radikal.ru/c17/1911/9c/2ffa6c5ebd6b.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )

}


export default ProfileInfo;