import { baseApi } from "@/shared/api";

export const booksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: ({q, limit}) => ({
        url: '',
        params: {
          q,
          limit,
          fields: 'key,title,author_name,language,number_of_pages_median'
        }
      })
    })
  })
})

export const { useGetBooksQuery } = booksApi;