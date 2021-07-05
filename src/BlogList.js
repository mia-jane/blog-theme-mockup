import React from 'react';
import BlogPost from "./BlogPost"
import postList from "./postList"
import rightarrow1 from './images/right-arrow.png'

function BlogList(props) {
    const mappedPosts = postList.map(newPost => {
        return <BlogPost title={newPost.title} subTitle={newPost.subTitle} author={newPost.author} date={newPost.date} />
    })
    return (
        <div className="postsContainer">
            {mappedPosts}
            <div className="old-post-button-container">
                <button id="older-posts-button">
                    <span>OLDER POSTS</span>
                    <img className="right-arrow" src={rightarrow1} alt="" />
                </button>
            </div>
        </div>
    );
}

export default BlogList;



//rsf to have it template props out for you :)