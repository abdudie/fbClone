import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../DummyData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [islike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(islike ? like - 1 : like + 1);
    setIsLike(!islike);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            ></img>
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt=""></img>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            ></img>
            <img
              className="heartIcon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            ></img>
            <span className="postLikeCounter">{like} people likes this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
