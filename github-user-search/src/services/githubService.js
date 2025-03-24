import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = [];

    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);

    const queryString = query.join("+");

    const response = await axios.get(`https://api.github.com/search/users?q=${queryString}`);

    console.log("GitHub API Response:", response.data); // Debugging

    return response.data.items || []; // Ensure it's an array
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
