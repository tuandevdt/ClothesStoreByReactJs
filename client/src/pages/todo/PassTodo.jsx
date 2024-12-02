import React, { useEffect } from 'react'
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { callAPITodo } from '../../redux/ThunkAction';
import { useGetTodoQuery } from '../../redux/createAPI';

export default function PassTodo() {


  const { data, error, isLoading, isFetching, isSuccess } = useGetTodoQuery();

    let dataLoad = data?.map((item, index) => {
        return (
          <Item key={item.id} index={index} {...item }/>
        );
      });
  return (
    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
    {dataLoad}
  </tbody>
  )
}
