import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElement =
        props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    const maxLength10 = maxLengthCreator(10);

    let AddNewPostForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                       validate={[required, maxLength10]} />
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