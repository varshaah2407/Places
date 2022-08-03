import React from "react";

import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Varshaah S",
      image:
        "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn",
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
