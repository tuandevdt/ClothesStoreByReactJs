import React, { useState } from "react";
import UserItem from "../../components/admin/UserItem";

export default function AdminUser() {
  // Original users list (static data)
  const originalUsers = [
    {
      name: "Tuan Dev",
      color: "red",
      image: "https://readymadeui.com/profile_4.webp",
      email: "tuandevdt@example.com",
      role: "Admin",
    },
    {
      name: "Jennie Cooper",
      color: "green",
      image: "https://readymadeui.com/profile_5.webp",
      email: "jennie@example.com",
      role: "User",
    },
    {
      name: "User2",
      color: "blue",
      image: "https://readymadeui.com/profile_3.webp",
      email: "abc123@example.com",
      role: "User",
    },
  ];

  const [users, setUsers] = useState(originalUsers); 
  const [searchQuery, setSearchQuery] = useState(""); 

  function handleDelete(index) {
    let isDelete = confirm("Are you sure?");
    if (isDelete) {
      users.splice(index, 1);
      setUsers([...users]);
    }
  }

  function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); 

    if (query) {
      const filteredUsers = originalUsers.filter(user =>
        user.name.toLowerCase().includes(query)
      );
      setUsers(filteredUsers); 
    } else {
      setUsers(originalUsers);
    }
  }

  const datas = users.map((item, index) => {
    return (
      <UserItem
        index={index}
        key={index}
        {...item}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div className="font-[sans-serif] overflow-x-auto lg:ml-64">
      <div className="flex rounded-md mt-6 border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Something..."
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
          value={searchQuery}
        />
      </div>
      <table className="min-w-full bg-white">
        <thead className="whitespace-nowrap">
          <tr>
            <th className="pl-4 w-8">
              <input id="checkbox" type="checkbox" className="hidden peer" />
              <label
                htmlFor="checkbox"
                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-white"
                  viewBox="0 0 520 520"
                >
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check"
                    data-original="#000000"
                  />
                </svg>
              </label>
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">Name</th>
            <th className="p-4 text-left text-sm font-semibold text-black">Color</th>
            <th className="p-4 text-left text-sm font-semibold text-black">Role</th>
            <th className="p-4 text-left text-sm font-semibold text-black">Active</th>
            <th className="p-4 text-left text-sm font-semibold text-black">Action</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">{datas}</tbody>
      </table>
      <div className="md:flex m-4">
        <p className="text-sm text-gray-500 flex-1">
          Showing 1 to {users.length} of {originalUsers.length} entries
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
    </div>
  );
}
