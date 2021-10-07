
export const API_KEY = (process.env.VERCEL_ENV === "production") ? process.env.VERCEL_APP_API_KEY :process.env.REACT_APP_API_KEY

export const API_URL = `https://api.giphy.com/v1`