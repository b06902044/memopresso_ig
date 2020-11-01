import React , { useState } from 'react';
import {images} from '../style/Image_source';

const Posts = () => {
    const [postIdx, setPostIdx] = useState(9);
    const [posts, setPosts] = useState(images.slice(0, 9));

    //repeatly load the image(use % operation)
    const handleLoadMore = () => {
        const tempPosts = posts;
        for(let i = 0; i < 9; i++){
            tempPosts.push(images[(postIdx + i) % 10]);
        }
        setPostIdx(postIdx + 9);
        setPosts(tempPosts);
    }

    return (
        <React.Fragment>
            <div className = "threeButtons">
                <button>貼文</button>
                <button>IGTV</button>
                <button>已標註</button>
            </div>
            <div className = "posts">
                {posts.map(post => {
                    return(<img src = {post} alt = "post alt" className = "post"/>);
                })}
            </div>
            <button onClick = {handleLoadMore} className = "loadMore">Load More...</button>
        </React.Fragment>
        
    );
}
 
export default Posts;