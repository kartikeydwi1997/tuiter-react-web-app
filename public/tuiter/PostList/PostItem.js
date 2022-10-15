const PostItem = (post) => {
    let card = `
    <div class="card col border-secondary wd-mx-5 wd-clear bg-transparent ">
        <img src="../ExploreScreen/images/${post.bigPicture}" class="card-img-top" alt="post image">
        <hr />
        <div class="card-body">
            <p class="card-title fs-6 fw-bolder" >${post.title}</p>
            <p class="card-text text-secondary">${post.details}</p>
            <a href="#" class="text-secondary" style="text-decoration: none;">
                ${post.URL}
            </a>
        </div>
    </div>
`;
    if (post.title == "" && post.details == "" && post.URL == "") {
        card = `
        <div class="card col border-secondary wd-mx-5 bg-transparent wd-clear">
            <img src="../ExploreScreen/images/${post.bigPicture}" class="card-img-top" alt="post image">
        </div>
    `;
    }

    return (`
    <li class="list-group-item text-white p-3 bg-transparent">
        
                    <img src="../ExploreScreen/images/${post.avatarIcon}" class="img-fluid img-size rounded-circle" />
                    <div class="col col-xl-9 ps-2 mb-2 float-start" >
                        <strong>${post.userName}</strong>
                        <span><i class="fa-solid fa-circle-check"></i></span>
                        <span class="text-secondary">
                            @${post.userHandle} - ${post.time}
                        </span>
                        <br />
                        ${post.caption}
                    </div>
                    <i class="fa-solid fa-ellipsis text-secondary mx-4" ></i>
        ${card}
        <ul class="nav nav-fill mt-2 text-secondary">
            <li class="nav-item">
                <i class="fa-regular fa-comment-dots"></i> ${post.comments}
            </li>
            <li class="nav-item">
                <i class="fa-solid fa-retweet"></i> ${post.retuits}
            </li>
            <li class="nav-item">
                <i class="fa-regular fa-heart"></i> ${post.likes}
            </li>
            <li class="nav-item">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </li>
        </ul>
    </li>
`);
};


export default PostItem;