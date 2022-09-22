import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const studentsApi = createApi({
  reducerPath: 'anything',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({

    list: builder.query({
      query: () => "students/",
      providesTags: ['Students']
    }),

    addStudent: builder.mutation({
      query: (student) => ({
        url: "students/",
        method: "POST",
        body: student
      }),
      invalidatesTags: ['Students']
    }),

    updateStudent: builder.mutation({
      query: ({ details, ...rest }) => ({
        url: `students/upd/${details}`,
        method: "PUT",
        body: rest
      }), invalidatesTags: ['Students']
    }),

    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/upd/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['Students']
    })
  })
})

export const { useListQuery, useAddStudentMutation, useUpdateStudentMutation, useDeleteStudentMutation } = studentsApi
