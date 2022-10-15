import PostItem from "./PostItem";
import posts from "./posts.json";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                posts.map((post, i) => (
                    <div>
                        <PostItem post={post} key={i} />
                    </div>
                ))}
        </ul>
    );
};

export default PostList;