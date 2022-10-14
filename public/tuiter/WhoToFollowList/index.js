import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./Who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item">
                <div class="row">
                    <span class="fw-bolder">Who to follow</span>
                </div>
            </li>
            ${who.map(w => {
        return (`
                            ${WhoToFollowListItem(w)}
                    `);
    }).join('')
        }
        </ul>
    `);
};

$("#wd-who-to-follow").append(WhoToFollowList());

export default WhoToFollowList;