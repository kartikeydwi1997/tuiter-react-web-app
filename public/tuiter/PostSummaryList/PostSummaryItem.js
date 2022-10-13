const PostSummaryItem = (post) => {
    return (`  
    <div class="card rounded-0">
        <div class="card-body">
            <div class="row">
                <div class="col-9">
                <h5 class="fs-6 text-secondary">${post.topic}</h5>
                    <div class="wd-list-flex">
                   
                        <div class="fs-6 fw-bolder text-white ">${post.userName}</div> <span class="px-2"><i
                                class="fa-solid fa-circle-check"></i></span>
                        <span class="px-2 text-secondary">- ${post.time}</i></span>
                    </div>
                    <div class="fw-bolder text-white">${post.title}</div>
                </div>
                <div class="col-3 text-end">
                    <img src="../ExploreScreen/images/${post.image}" class="img-fluid rounded img-size-main"
                        alt="logo">
                </div>
            </div>
        </div>
</div>`);

}
// $('#wd-post-summary-item').append(PostSummaryItem({
//     topic: "Web Development",
//     userName: "ReactJS",
//     time: "2h",
//     image: "react_logo.svg",
//     title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
// },
// ));
export default PostSummaryItem;