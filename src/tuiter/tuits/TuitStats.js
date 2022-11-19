import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { useState } from "react";
const TuitStats = ({ stats }) => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(stats.liked);
    const [likes, setLikes] = useState(stats.likes);
    const [dislikes, setDislikes] = useState(stats.dislikes);
    const [isDisliked, setIsDisliked] = useState(stats.disliked);
    const likeClickHandler = () => {
        const newlikes = isLiked ? likes - 1 : likes + 1;
        setLikes(newlikes);
        setIsLiked(!isLiked);
        dispatch(updateTuitThunk({
            ...stats,
            likes: newlikes,
            liked: !isLiked
        }));

    }
    const dislikeClickHandler = () => {
        const newDislikes = isDisliked ? dislikes - 1 : dislikes + 1;
        setDislikes(newDislikes);
        setIsDisliked(!isDisliked);
        dispatch(updateTuitThunk({
            ...stats,
            dislikes: newDislikes,
            disliked: !isDisliked
        }));
    }
    return (
        <div className="row">
            <ul className="nav nav-fill mt-2 text-secondary">
                <li className="nav-item">
                    <i className="bi bi-chat-left-dots"></i> {stats.replies}
                </li>
                <li className="nav-item">
                    <i className="bi bi-repeat"></i> {stats.retuits}
                </li>
                <li className="nav-item">
                    <span style={{ marginRight: '5px' }}>  <i className={isLiked ? "bi bi-heart-fill text-danger" : "bi bi-heart"} onClick={likeClickHandler}></i></span>{stats.likes}
                </li>
                <li className="nav-item">
                    <span style={{ marginRight: '5px' }}>  <i className={isDisliked ? "bi bi-hand-thumbs-down-fill text-danger" : "bi bi-hand-thumbs-down-fill "} onClick={dislikeClickHandler}></i></span>{stats.dislikes}
                </li>
                <li className="nav-item">
                    <i class="bi bi-share"></i>
                </li>
            </ul>
        </div>
    )
}
export default TuitStats;