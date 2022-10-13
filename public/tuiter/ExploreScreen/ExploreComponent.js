import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    <div class="row top-none">
        <div class="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
            <div class="input-group wd-A-input">
                <span class="input-group-text wd-btn-grp border-end-0 text-secondary"> <i
                        class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" placeholder="Search Twitter"
                    class="form-control wd-A-input border-start-0">
            </div>
        </div>
        <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 bg-color-green">
            <span>
                <h3><i class="fa-solid fa-gear wd-settings-icon text-primary"></i>
            </span></h3>
        </div>
    </div>
    
    <ul class="nav nav-tabs mb-2 pt nav-fill">
        <li class="nav-item">
            <a class="nav-link active" href="./pages/for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./pages/trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./pages/news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./pages/sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block ">
            <a class="nav-link" href="./pages/entertainment.html">Entertainment</a>
        </li>
    </ul>
    <div class="card">
        <div class="position-relative">
            <img src="../ExploreScreen/images/ship.webp" class="card-img-top" alt="...">
            <div class="position-absolute bottom-0 start-0 text-light fs-3 p-2 fw-bolder">SpaceX's
                Starship</div>
        </div>
    </div>
    
    ${PostSummaryList()}
    `);
}
export default ExploreComponent