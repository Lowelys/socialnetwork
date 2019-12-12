let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'My first post', likeCount: 23},
                {id: 3, message: 'My first post', likeCount: 23},
                {id: 4, message: 'My first post', likeCount: 23},
                {id: 5, message: 'My first post', likeCount: 23},
                {id: 6, message: 'My first post', likeCount: 23},
            ],
            newPostText: 'it'

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Bue'},
            ],
            dialogs: [
                {id: 1, name: 'Dmitry'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Sergey'},
            ]
        },
        sidebar: {}
    },
   getState () {
        return this._state;
   },
    _callSubscriber () {
        console.log('State changed');
    },
    addPost()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push (newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);

    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },
    subscribe (observer) {
        this._callSubscriber(observer);
    },

}


export default store;

window.state = store;