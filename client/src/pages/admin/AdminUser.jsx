import React, { useState } from "react";
import ListUser from "../../components/admin/UserManager/ListUser";
import SearchUser from "../../components/admin/UserManager/searchUser";

export default function AdminUser() {


  return (
    <div className="font-[sans-serif] overflow-x-auto lg:ml-64">
        <SearchUser />
        <ListUser />  
    </div>
  );
}
