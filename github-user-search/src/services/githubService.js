import axios from "axios";

const API_URL = "https://api.github.com/users/";

export const fetchUserData = async (username, location, minRepos) => {

  try {
    let query = [];

    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);

    const queryString = query.join("+");

    const response = await fetch(`https://api.github.com/search/users?q=${queryString}`);
    const data = await response.json();

    console.log("GitHub API Response:", data); // Debugging

    return data.items || []; // Ensure it's an array
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};