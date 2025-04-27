export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};

export const IMG_CDN = process.env.REACT_APP_MOVIE_IMAGE_URL;
