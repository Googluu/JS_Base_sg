import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Logout from '../logout/Logout';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  } else {
    handlerFatalError();
  }

  function handlerFatalError() {
    <h2>Ups!! Algo salio mal</h2>
  }

  return (
    isAuthenticated && (
      <div>
        <div className="flex m-4 p-4">
          <img className="rounded-full w-20 h-20 mr-4" src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
      </div>

      <div className="flex">
        <Logout />
      </div>
      </div>
    )
  );
};

export default Profile;
