const WhoToFollowListItem = (who) => {
    console.log(who)
    return (`  
    <li class="list-group-item">
        <div class="row">
            <div class="col-md-2 p-1">
                <img src="../ExploreScreen/images/${who.avatarIcon}" class="img-fluid img-size rounded-circle"
                    alt="...">
            </div>
            <div class="col-md-6 p-1 overlap-text">
                <div class="wd-list-flex  ms-1">
                    <div class="fs-6 fw-bolder img-no-wrap">${who.userName}</div> <span class="px-2"><i
                            class="fa-solid fa-circle-check"></i></span>
                </div>
                <span>@${who.handle}</i></span>
            </div>
            <div class="col-md-4 p-1 text-end">
                <button class=" btn btn-primary rounded-pill">
                    Follow
                </button>
            </div>
        </div>

    </li>`);

}
// $('#wd-who-to-follow').append(WhoToFollowListItem({
//     avatarIcon: "../../explore/images/java_logo.png",
//     userName: "Java",
//     handle: "Java",
// }));
export default WhoToFollowListItem;