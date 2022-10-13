import PostItem from "./PostItem.js";
import Posts from "./Posts.js";

const PostList = () => {
    return (`
    <ul class="list-group">
            ${Posts.map(post => {
        return (`
                            ${PostItem(post)}
                    `);
    }).join('')
        }
        </ul>
    `);
};

$("#wd-post-list").append(PostList());

export default PostList;