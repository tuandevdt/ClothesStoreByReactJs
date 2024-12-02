import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../redux/slice/authSlice';
import Swal from "sweetalert2";

export default function PrivateRoute({ element: Element, ...rest }) {
  const dispatch = useDispatch();

  const { username, role, email, loading, error } = useSelector((state) => state.auth); // Truy cập state từ auth slice
  console.log('username', username);
  console.log("role check o", role);

  if (loading) return <div>Loading...</div>;


  // if (!role) return null; // Chờ load xong dữ liệu

  useEffect(() => {
    if (!role) {
      dispatch(getUser());
    }
  }, [dispatch, role]);

  if (loading) return <div>Loading...</div>;  
  console.log('role check',role);
  
  if (role !== 'admin') {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text:  "Ban khong co quyen truy cap!",
      timer: 1500,
      showConfirmButton: false,
      didClose: () => {
        window.history.back();
      },
    })
    return null;
  }

  return <Element {...rest} />;
}
