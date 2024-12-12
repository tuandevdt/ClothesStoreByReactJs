import React, { useEffect, useState } from "react";
import { useUpdateStatusUserMutation } from "../../../redux/createAPI";

export default function UserItem({ name, image, email, role, status, id }) {
  const [isActive, setIsActive] = useState(status);
  const [updateStatus] = useUpdateStatusUserMutation();

  useEffect(() => {
    setIsActive(status);
  }, [status]);

  const handleChange = async (e) => {
    const newStatus = e.target.checked;
    setIsActive(newStatus);
    try {
      await updateStatus({ id, isActive: newStatus }).unwrap();
    } catch (error) {
      console.error("Failed to update status:", error);
      setIsActive(!newStatus);
    }
  };

  return (
    <tr className="odd:bg-blue-50">
      <td className="p-4 text-sm">
        <div className="flex items-center cursor-pointer w-max">
          {role == "admin" ? (
            <img
              src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg"
              className="w-9 h-9 rounded-full shrink-0"
              alt={name}
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3jhpAFYpzxx39DRuXIYxNPXc0zI5F6IiMQ&s"
              className="w-9 h-9 rounded-full shrink-0"
              alt={name}
            />
          )}

          <div className="ml-4">
            <p className="text-sm text-black">{name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{email}</p>
          </div>
        </div>
      </td>
      <td className="p-4 text-sm text-black">{role}</td>
      <td className="p-4">
        <label className="relative cursor-pointer">
          <input
            onChange={handleChange}
            type="checkbox"
            className="sr-only peer"
            checked={isActive}
            disabled={role === "admin"}
          />
          <div
            className={`w-11 h-6 flex items-center ${
              role === "admin"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-300"
            } rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]`}
          ></div>
        </label>
      </td>
    </tr>
  );
}
