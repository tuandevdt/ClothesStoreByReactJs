import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import checkAndRefreshToken from "../middleware/checkAndRefreshToken";

const adminUrl = "/admin/";
const authUrl = "/auth/";
const userUrl = "/user/";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/v1/api",
    prepareHeaders: async (headers) => {
      let token = localStorage.getItem("accessToken");

      token = await checkAndRefreshToken(token);

      if (token) {
        headers.set("Authorization", `Bearer ${token}`); 
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Admin Endpoints
    getUsers: builder.query({
      query: () => `${adminUrl}users`,
    }),
    updateStatusUser: builder.mutation({
      query: ({ id, isActive }) => ({
        url:  `${adminUrl}users/${id}`,
        method: "PATCH",
        body: { isActive },
      })
    }),
    getCategoriesAdmin: builder.query({
      query: () => `${adminUrl}categories`
    }),
    newCategory: builder.mutation({
      query: (body) => ({
        url: `${adminUrl}categories`,
        method: 'POST',
        body,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({id, body}) => ({
        url: `${adminUrl}categories/${id}`,
        method: "PATCH",
        body,
      })
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${adminUrl}categories/${id}`,
        method: "DELETE"
      })
    }),
    getProductsAdmin: builder.query({
      query: () => `${adminUrl}products`
    }),
    newProduct: builder.mutation({
      query: (body) => ({
        url: `${adminUrl}products`,
        method: 'POST',
        body,
      })
    }),  
    updateProduct: builder.mutation({
      query: ({id, body}) => ({
        url: `${adminUrl}products/${id}`,
        method: 'PUT',
        body
      })
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${adminUrl}/${id}`,
        method: 'DELETE',
      })
    }),

    //Todo Endpoints
    getTodo: builder.query({
      query: () => "admin/users",
    }),

    //Auth Endpoints
    login: builder.mutation({
      query: (body) => ({
        url: `${authUrl}login`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: `${authUrl}register`,
        method: "POST",
        body,
      }),
    }),

    //User Endpoints
    getProducts: builder.query({
      query: () => `${userUrl}products`
    }),
    getProductsByCategoryId: builder.query({
      query: (categoryId) => `${userUrl}products/category/${categoryId}`
    }),
    getDetail: builder.query({
      query: (id) => `${userUrl}products/${id}`
    }), 
    newCart: builder.mutation({
      query: (body) => ({
        url: `${userUrl}cart`,
        method: 'POST',
        body
      })
    }),
    getCarts: builder.query({
      query: (userid) => `${userUrl}cart/${userid}`
    }),
    getCart: builder.query({
      query: ({productId, colorId, sizeId, userId}) => {  
        return `${userUrl}cart?productId=${productId}&colorId=${colorId}&sizeId=${sizeId}&userId=${userId}`;
      }
    }),
    updateCart: builder.mutation({
      query: ({id, body}) => ({        
        url: `${userUrl}cart/${id}`,
        method: 'PATCH',
        body,
      }),      
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `${userUrl}cart/${id}`,
        method: 'DELETE',
      })
    }),
    newOrder: builder.mutation({
      query: (body) => ({
        url: `${userUrl}order`,
        method: 'POST',
        body,
      })
    }),
    newOrderItem: builder.mutation({
      query: (body) => ({
        url: `${userUrl}orderItem`,
        method: 'POST',
        body,
      })
    })  
  }),
});

export const {
  useGetUsersQuery,
  useUpdateStatusUserMutation,

  useGetCategoriesAdminQuery,
  useNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetProductsAdminQuery,
  useNewProductMutation,
  useUpdateProductMutation,
  useLazyGetProductsByCategoryIdQuery,
  useNewOrderMutation,
  useNewOrderItemMutation,

  useGetProductsQuery,
  useGetDetailQuery,
  useNewCartMutation,
  useGetCartsQuery,
  useGetCartQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,

  useGetTodoQuery,

  useLoginMutation,
  useRegisterMutation,
} = todoApi;
