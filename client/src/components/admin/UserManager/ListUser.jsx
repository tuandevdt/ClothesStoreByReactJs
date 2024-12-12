import React from "react";
import UserItem from "./UserItem";
import { useGetUsersQuery } from "../../../redux/createAPI";
export default function ListUser() {
  const { data } = useGetUsersQuery(undefined, {
    refetchOnMountOrArgChange: true, 
  });   
    
    const users = data?.data || []; 
    
    const dataUsers = users.map((item) => (
        <UserItem 
            key={item.id}
            name={item.username}
            image={item.image}
            status={item.isActive}
            email={item.email}
            role={item.role}
            id={item.id}
        />
    ));
    
  return (
    <>
      <table className="min-w-full bg-white">
        <thead className="whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Name
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Role
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Active
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
            {dataUsers}
        </tbody>
      </table>
      <div className="md:flex m-4">
        <p className="text-sm text-gray-500 flex-1">
          Showing 1 to {users.length} of {users.length} entries
        </p>
        <div className="flex items-center max-md:mt-4">
          <p className="text-sm text-gray-500">Display</p>
          <select className="text-sm text-gray-500 border border-gray-400 rounded h-7 mx-4 px-1 outline-none">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </div>
    </>
  );
}
