const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
      //  {id: 1, photoUrl: 'http://magazin.static.bildkontakte.de/pics/wordpress-content/singlemagazin/uploads/2013/01/M%C3%A4nner-Macken1-80x80.jpg', followed: false, fullName: 'Max', status: 'boss', location: {city: 'Minsk', country: 'Belarus'}},
    //    {id: 2, photoUrl: 'http://magazin.static.bildkontakte.de/pics/wordpress-content/singlemagazin/uploads/2013/01/M%C3%A4nner-Macken1-80x80.jpg', followed: true, fullName: 'Den', status: 'boss', location: {city: 'Pinsk', country: 'Belarus'}},
    //    {id: 3, photoUrl: 'http://magazin.static.bildkontakte.de/pics/wordpress-content/singlemagazin/uploads/2013/01/M%C3%A4nner-Macken1-80x80.jpg', followed: false, fullName: 'Masha', status: 'boss', location: {city: 'Brest', country: 'Belarus'}},
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }

};
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;