import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./Who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
        
            ${
                
               who.map(w => {
                    return(`
                            ${WhoToFollowListItem(w)}
                    `);
                }).join('')
            }
        </ul>
    `);
};

$("#wd-who-to-follow").append(WhoToFollowList());

export default WhoToFollowList;