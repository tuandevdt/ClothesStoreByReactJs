import React, { useState } from "react";
import ListUser from "../../components/admin/UserManager/ListUser";
import SearchUser from "../../components/admin/UserManager/searchUser";

export default function AdminUser() {


  return (
    <div className="font-[sans-serif] mt-4 overflow-x-auto lg:ml-64">
      <h1 className="pl-4 text-2xl font-bold">Quản lý user</h1>
      <ListUser />  
    </div>
  );
}
