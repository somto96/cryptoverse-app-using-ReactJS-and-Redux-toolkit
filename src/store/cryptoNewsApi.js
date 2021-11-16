import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "f2ba1cac2cmsh048a5564a721927p175ea4jsn5ed5eec5ec22",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

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
