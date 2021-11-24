import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": process.env.REACT_APP_CRYPTO_NEWS_API_HOST,
  "x-rapidapi-key": process.env.REACT_APP_CRYPTO_NEWS_API_KEY,
};

const baseUrl = process.env.REACT_APP_CRYPTO_NEWS_API_BASE_URL;

const createRequest = url => ({ headers: cryptoNewsApiHeaders, url });

export const cryptoNewsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
  reducerPath: "cryptoNewsApi",
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
