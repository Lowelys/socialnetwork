import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'http://magazin.static.bildkontakte.de/pics/wordpress-content/singlemagazin/uploads/2013/01/M%C3%A4nner-Macken1-80x80.jpg',
                    followed: false,
                    fullName: 'Max',
                    status: 'boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'http://magazin.static.bildkontakte.de/pics/wordpress-content/singlemagazin/uploads/2013/01/M%C3%A4nner-Macken1-80x80.jpg',
                    followed: true,
                    fullName: 'Den',
                    status: 'boss',
                    location: {city: 'Pinsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'http://magazin.static.bildkontakte.de/pics/wordpress-content/singlemagazin/uploads/2013/01/M%C3%A4nner-Macken1-80x80.jpg',
                    followed: false,
                    fullName: 'Masha',
                    status: 'boss',
                    location: {city: 'Brest', country: 'Belarus'}
                },
            ],
        );
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
<span>
<div>
    <img src={u.photoUrl} className={styles.userPhoto}/>
</div>
    <div>
        {u.followed
            ? <button onClick={() => {
                props.unfollow(u.id)
            }}>Unfollow</button>
            : <button onClick={() => {
                props.follow(u.id)
            }}>Follow</button>}
    </div>
</span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                          <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;