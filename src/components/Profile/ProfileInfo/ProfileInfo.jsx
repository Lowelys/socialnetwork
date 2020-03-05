import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div>
                <img src='https://c.radikal.ru/c07/1911/02/b3aec4a81cbe.jpg' className={s.imgBlock}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>
                    <b>Loking for a job</b>: {profile.lookingForAJob ? 'yes' : 'noy'}
                </div>
                {profile.lookingForAJob }
                <div>
                    <b>Loking for a job</b>: {profile.lookingForAJob ? 'yes' : 'noy'}
                </div>
                <div>
                    <b>About me</b>: {profile.aboutMe}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

            </div>
        </div>
    )
};

export default ProfileInfo;