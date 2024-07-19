import axios from "axios";

const fetchImages = async (query) => {
  const key = "bwJH3Nt_p76FOVEh6z_HwzY8ZkSRfkXzmWX4NpphGoY";
  const response = await axios.get("https://api.unsplash.com/photos", {
    params: { query: query },
    headers: { Authorization: `Client-ID ${key}` },
  });
  return response.results;
};

export default fetchImages;
