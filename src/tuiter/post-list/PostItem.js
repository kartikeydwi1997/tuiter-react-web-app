const PostItem = ({ post }) => {
    return (
        <li className="list-group-item p-3 bg-transparent">
            <img src={`/images/${post.avatarIcon}`} style={{ height: '45px' }} className="img-fluid img-size rounded-circle" alt="avatar" />
            <div className="col col-xl-9 ps-2 mb-2 float-start" >
                <strong>{post.userName}</strong>
                <span><i className="fa-solid fa-circle-check"></i></span>
                <span className="text-secondary">
                    @{post.userHandle} - {post.time}
                </span>
                <br />
                {post.caption}
            </div>
            <i className="fa-solid fa-ellipsis text-secondary mx-4" ></i>
            <div className="card col border-secondary wd-mx-5 wd-clear bg-transparent ">
                <img src={`/images/${post.bigPicture}`} className={
                    post.title !== "" && post.details !== "" && post.URL !== ""
                        ? "card-img-top"
                        : "card-img-top rounded-bottom"

                }
                    alt="post" />
                {post.title !== "" && post.details !== "" && post.URL !== "" ?
                    <div className="card-body">
                        <p className="card-title fs-6 fw-bolder" >{post.title}</p>
                        <p className="card-text text-secondary">{post.details}</p>
                        <a href={post.url} className="text-secondary" style={{ textDecoration: "none" }}>
                            {post.URL}
                        </a>
                    </div> : <></>}
            </div>
            <ul className="nav nav-fill mt-2 text-secondary">
                <li className="nav-item">
                    <i className="bi bi-chat-left-dots"></i> {post.comments}
                </li>
                <li className="nav-item">
                    <i className="bi bi-repeat"></i> {post.retuits}
                </li>
                <li className="nav-item">
                    <i className="bi bi-heart-fill"></i> {post.likes}
                </li>
                <li className="nav-item">
                    <i className="bi bi-upload"></i>
                </li>
            </ul>
        </li >
    );
};


export default PostItem;