import React from "react";

const PostItem = ({
                      post = {
                          avatar: '/tuiter/assets/images/dennis.jpeg',
                          handle_name: 'SpaceX',
                          user_name: '@SpaceX',
                          time: '23h',
                          sub_heading_prefix: "Dennis and Akko Tito are the first two crewmembers on Startship's second commercial spaceflight around the Moon",
                          sub_heading_link: 'https://spacex.com/updates',
                          comment_count: '595',
                          retweet_count: '1168',
                          like_count: '11.k',
                      }
                  }) => {
    return (<div className="list-group-item wd-border-bottom pt-3">
        <div className="d-flex">
            <div className="wd-avatar">
                <img src={post.avatar} height="48px" width="48px" alt=""/>
            </div>
            <div className="wd-post ps-3 wd-cursor-pointer">
                <div className="wd-post-heading">
                    <div className="d-flex">
                        <div className="wd-handle-name">
                            <label className="pe-1">
                                {post.handle_name}
                            </label>
                            <span className="fa-stack fa-1x wd-stack-correction wd-verified-override pb-1"> <i
    className="fas fa-certificate fa-stack-1x"/> <i
    className="fas fa-check fa-2xs fa-stack-1x fa-inverse "/> </span>
                        </div>
                        <div className="wd-gray-text ps-1">
                            {post.user_name}
                        </div>
                        <div className="wd-gray-text ps-1 pe-1 position-relative">
                            •
                        </div>
                        <div className="wd-gray-text pe-1">
                            {post.time}
                        </div>
                        <div className="wd-gray-text wd-margin-left-auto">
                            <i className="fas fa-ellipsis-h "/>
                        </div>
                    </div>
                </div>
                {post.sub_heading_prefix}
                <a className="text-decoration-none" href={post.sub_heading_link}
                   target="_blank">{post.sub_heading_link_text}</a>
                {post.sub_heading_suffix}
                <div className="wd-post-content mt-2">
                    <img className={`wd-post-image ${post.image_heading ? '' : 'wd-bottom-curve'}`}
                         src={post.image_url} width="100%" alt=""/>

                    {post.image_heading ? <div className="p-2">
                                        {post.image_heading}
                                        <div className="wd-gray-text">
                                            {post.image_sub_heading}
                                        </div>
                                        <div className="wd-gray-text ">
                                            <a className="text-decoration-none" href={post.post_url} target="_blank">
                                                <i className="fas fa-link pe-1"/>
                                                {post.post_url_name}
                                            </a>
                                        </div>
                                    </div> : ''}
                </div>
                <div className="d-flex pt-2 ps-1">
                    <div className="w-25 wd-gray-text">
                        <a className="text-decoration-none" href="#">
                            <i className="far fa-comment pe-2"/>
                            {post.comment_count}
                        </a>
                    </div>
                    <div className="w-25 wd-gray-text">
                        <a className="text-decoration-none" href="#">
                            <i className="fas fa-retweet pe-2"/>
                            {post.retweet_count}
                        </a>
                    </div>
                    <div className="w-25 wd-gray-text">
                        <a className="text-decoration-none" href="#">
                            <i className="far fa-heart pe-2"/>
                            {post.like_count}
                        </a>
                    </div>
                    <div className="w-25 wd-gray-text">
                        <a className="text-decoration-none" href="#">
                            <i className="fas fa-share pe-2"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default PostItem;