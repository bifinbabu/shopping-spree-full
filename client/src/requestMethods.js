import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGY2Y2QwOGZiNDgzYzBkMzQ4MzViOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDk1NjY5MiwiZXhwIjoxNjgxMjE1ODkyfQ.JyRJeZ9WsKxVY-l8b2eyBcE2oIk52K9Abnr6Gga5NYs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
