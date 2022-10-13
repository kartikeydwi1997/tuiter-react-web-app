import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${
                posts.map(post => {
                    return(`
                            ${PostSummaryItem(post)}
                    `);
                }).join('')
            }
        </ul>
    `);
};

$("#wd-post-summary-list").append(PostSummaryList());

export default PostSummaryList;