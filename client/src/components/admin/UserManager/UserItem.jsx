import React, { useEffect, useState } from 'react';
import { useUpdateStatusUserMutation } from '../../../redux/createAPI';

export default function UserItem({ name, image, color, email, role, status, id }) {
  const [isActive, setIsActive] = useState(status); 
  const [updateStatus] = useUpdateStatusUserMutation();

  // Cập nhật isActive khi status từ props thay đổi
  useEffect(() => {
    setIsActive(status);
  }, [status]);

  const handleChange = async (e) => {
    const newStatus = e.target.checked;
    setIsActive(newStatus); 
    try {
      await updateStatus({ id, isActive: newStatus }).unwrap();
    } catch (error) {
      console.error('Failed to update status:', error);
      setIsActive(!newStatus); 
    }
  };

  let style = { backgroundColor: color };

  return (
    <tr className="odd:bg-blue-50">
      <td className="p-4 text-sm">
        <div className="flex items-center cursor-pointer w-max">
          <img
            src={image}
            className="w-9 h-9 rounded-full shrink-0"
            alt={name}
          />
          <div className="ml-4">
            <p className="text-sm text-black">{name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{email}</p>
          </div>
        </div>
      </td>
      <td className="p-4 text-sm text-black">
        <div style={style} className='div-color'></div>
      </td>
      <td className="p-4 text-sm text-black">{role}</td>
      <td className="p-4">
        <label className="relative cursor-pointer">
          <input
            onChange={handleChange}
            type="checkbox"
            className="sr-only peer"
            checked={isActive} 
          />
          <div className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]"></div>
        </label>
      </td>
    </tr>
  );
}