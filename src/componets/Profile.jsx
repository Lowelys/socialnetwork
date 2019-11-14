import React from 'react';
import s from'./Profile.module.css'

const Profile = () => {
   return               <div className={s.content}>
       <div>
           <img src='https://pbs.twimg.com/media/CvdRNI4WgAAb5Zz.jpg:large'/>
       </div>
       <div>
       ava + description
       </div>
       <div>
        My post
        </div>
        <div>
         New Post
         </div>
         <div className={s.posts}>
         <div className={s.item}>
            post 1
         </div>
         <div className={s.item}>
            post 2
        </div>
    </div>
   </div>

}


export default Profile;