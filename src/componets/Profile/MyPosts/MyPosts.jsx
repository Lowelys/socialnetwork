import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElement =
        props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

let AddNewPostForm = (props) => {
      return   <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    };

    AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};


export default MyPosts;