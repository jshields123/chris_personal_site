import fetch from "node-fetch";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 12 * 60 * 60 }); // Cache for 12 hours

const fetchInstagramPosts = async (userId, accessToken) => {
  const cacheKey = `instagram_posts_${userId}`;
  const cachedPosts = cache.get(cacheKey);

  if (cachedPosts) {
    return cachedPosts; // Return cached posts if available
  }

  try {
    const response = await fetch.get(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
    );
    const posts = response.data.data.slice(0, 5); // Get the last 5 posts
    cache.set(cacheKey, posts); // Cache the posts
    return posts;
  } catch (error) {
    throw new Error("Error fetching Instagram posts: " + error.message);
  }
};

export default fetchInstagramPosts;
