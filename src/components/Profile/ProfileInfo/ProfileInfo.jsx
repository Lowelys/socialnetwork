import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='https://c.radikal.ru/c07/1911/02/b3aec4a81cbe.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

            </div>
        </div>
    )
};

export default ProfileInfo;