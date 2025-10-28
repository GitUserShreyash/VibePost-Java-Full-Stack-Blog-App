import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes,faComment } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
export const ReactBtn = () => {
  const [likes, setLikes] = useState(0);
  const [likeStatus, setLikeStatus] = useState(false);
  return (
    <div className="react-container flex flex-direction-row gap-4">
      <div className="flex flex-direction-row gap-2">
        <p className="likes">{likes}</p>
        <button
          onClick={() => {
            setLikes(likeStatus ? likes - 1 : likes + 1);
            setLikeStatus(!likeStatus);
          }}
          className="like-button"
          aria-label="Like Button"
        >
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
        </button>
      </div>
      <div className="share">
          <button className="share-button" aria-label="Share Button">
              <FontAwesomeIcon icon={faShareNodes} className="text-blue-500 hover:text-blue-700" />
          </button>
      </div>
      <div className="comment">
          <button className="comment-button" aria-label="Comment Button">
            <FontAwesomeIcon icon={faComment} className="text-green-500 hover:text-green-700" />
          </button>
      </div>
    </div>
  );
};
