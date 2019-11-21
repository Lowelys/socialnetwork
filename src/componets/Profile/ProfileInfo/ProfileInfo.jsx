import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src='https://c.radikal.ru/c07/1911/02/b3aec4a81cbe.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )

}


export default ProfileInfo;