import { useEffect, useState } from "react";
import fetchInstagramPosts from "../api/instagram";

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
    <div className="instagram-posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
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
      <style jsx>{`
        .instagram-posts {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .post {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          width: calc(33.333% - 20px);
        }
        img,
        video {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default InstagramPosts;
