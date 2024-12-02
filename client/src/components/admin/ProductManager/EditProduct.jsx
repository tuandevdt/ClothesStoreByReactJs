import React, { useEffect } from 'react'
import { useGetDetailQuery } from '../../../redux/createAPI';
import { useParams } from 'react-router-dom';
import ItemEditProduct from './ItemEditProduct';

export default function EditProduct() {
    const {id} = useParams()
    console.log(id);
    
    const { data, isLoading, error } = useGetDetailQuery(id);
    
    if (isLoading) {
        return <div>Loading...</div>; // Hiển thị trạng thái loading
      }
    
      if (error) {
        return <div>Error: {error.message}</div>; // Hiển thị lỗi nếu có
      }
      const product = data?.product || {}; 
      console.log('products edit',product);

  return (
    <ItemEditProduct itemProduct={product} />
  )
}
