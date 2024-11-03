import { useEffect, useState } from "react";
import fetchInstagramPosts from "../api/instagram";
import styles from "./InstagramPosts.module.css";

const InstagramPosts = ({ userId, accessToken }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchInstagramPosts(userId, accessToken);
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.error(err);
        setLoading(false);
      }
    };

    loadPosts();
  }, [userId, accessToken]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={styles.instagram_posts}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            {post.media_type === "IMAGE" && (
              <img src={post.media_url} alt={post.caption} />
            )}
            {post.media_type === "CAROUSEL_ALBUM" && (
              <img src={post.thumbnail_url} alt={post.caption} />
            )}
            {post.media_type === "VIDEO" && (
              <video controls>
                <source src={post.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </a>
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;
