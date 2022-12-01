import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '6d4484eeb1msh639dfacfc328414p16e255jsnee61e3e3bc8b'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetail: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailQuery
} = cryptoApi;