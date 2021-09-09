import { getAuthToken } from "./utils.js";

// blog source API
const BASE_URL = "https://student-json-api.lidemy.me";

// limit rules
const POST_LIMIT = 5;
const POST_SORT = "createdAt";
const POST_ORDER = "desc";

// get user
export const getUser = (userId) => {
  return fetch(`${BASE_URL}/users/${userId}`).then((res) => res.json());
};

// get all article
export const getPosts = () => {
  return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`).then((res) =>
    res.json()
  );
};

// get single page
export const getPost = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
};

// set limit in page
export const getLimitPosts = (page) => {
  return fetch(
    `${BASE_URL}/posts?_page=${page}&_limit=${POST_LIMIT}&_sort=${POST_SORT}&_order=${POST_ORDER}`
  ).then((res) => res.json());
};

// get user login info
export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

// get user register info
export const register = (username, password, nickname) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      nickname,
    }),
  }).then((res) => res.json());
};

// get token
export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// set new post
export const newPost = async (title, body) => {
  const token = getAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });
    if (!response.ok)
      throw new Error("Network response was not ok in newPost.");
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      ok: 0,
      data: error,
    };
  }
};
