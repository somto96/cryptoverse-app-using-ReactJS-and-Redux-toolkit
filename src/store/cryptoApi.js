import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_CRYPTO_API_HOST,
  "x-rapidapi-key": process.env.REACT_APP_CRYPTO_API_KEY,
};

const baseUrl = process.env.REACT_APP_CRYPTO_API_BASE_URL;

const createRequest = url => ({ headers: cryptoApiHeaders, url });

export const cryptoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptoDetails: builder.query({
      query: coinId => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
    getCryptos: builder.query({
      query: count => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
  reducerPath: "cryptoApi",
});

// Export hooks for usag e in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
