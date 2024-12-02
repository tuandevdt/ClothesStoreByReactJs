import { useGetDetailQuery, useGetProductsQuery } from "../../redux/createAPI";


export const useGetDetail = async (id) => {
    const { data, isLoading, error } = await useGetDetailQuery(id);
    const productItem = data || null;
  
    return { productItem, isDetailLoading: isLoading, detailError: error }
  };
export const useGetProducts = async () => {
    const { data, isLoading, error } = await useGetProductsQuery();
    const productsList = data || null;
  
    return { productsList, isLoading, error };
}