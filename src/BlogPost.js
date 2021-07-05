import React from 'react';

function BlogPost(props) {
    return (
        <div className="post">
            <div className="title-subtitle">
                <h3>{props.title}</h3>
                <p className="subtitle">{props.subTitle}</p>
            </div>
            <p className="posted-by">Posted by <span style={{color: "black"}}>{props.author}</span> on {props.date}</p>
            <hr/>
        </div>
    );
}

export default BlogPost;

//rsf for template :)