import { baseApi } from "@/shared/api";

export const booksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: ({q, limit = 10}) => ({
        url: '/search.json',
        params: {
          q,
          limit,
          fields: 'key,title'
        }
      })
    }),
    getBookById: build.query({
      query: ({type, id}) => ({
        url: `/${type}/${id}.json`,
      })
    }),
  })
})

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi;