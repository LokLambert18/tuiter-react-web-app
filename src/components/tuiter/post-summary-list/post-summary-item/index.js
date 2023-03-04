import React from "react";

const PostSummaryItem = ({
                             post = {
                                 topic:"SpaceX",
                                 userName: 'Space',
                                 time: '2h',
                                 description: "Tesla Cubertruck lands on Mars and picks up the curiosity rover on its 6'bed",
                                 image: '/tuiter/assets/images/tesla-logo.jpg'
                             }
                         }) => {
    return (<a href="#" className="list-group-item list-group-item-action">
        <div className="wd-post">
            <div className="wd-flex-container">
                <div className="wd-width-80p">
                    <div className="wd-post-topic-new">
                        {post.topic}
                    </div>
                    <div className="wd-font-bold d-inline-block pe-1">
                        {post.userName}
                    </div>
                    <label className="wd-post-topic-new ps-1">- {post.time}</label>
                    <div className="wd-font-bold">
                        {post.description}
                    </div>
                </div>
                <div className="wd-post-2-image mt-1">
                    <img src={post.image} height="100px" width="100px" alt=""/>
                </div>
            </div>
        </div>
    </a>)
}
export default PostSummaryItem;