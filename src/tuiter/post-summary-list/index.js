import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json"
const PostSummaryList = () => {
    return (
        <ul className="list-group">
            {
                posts.map((post, i) => (
                    <div>
                        <PostSummaryItem post={post} key={i} />
                    </div>
                ))}
        </ul>
    );
};


export default PostSummaryList;